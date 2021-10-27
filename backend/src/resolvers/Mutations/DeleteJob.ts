import { GraphQLResolveFn } from '../../utils/types';

const deleteListing: GraphQLResolveFn = async (parent, args, context, info) => {

	// If the job I would like to delete has any likes, we need to use cascading deletes, beacuse of the relations between the two tables.
	// To resolve this error, you can:
		 // Make the relation optional
		// Change the author of the posts to another user before deleting the user
		// Delete a user and all their posts with two separate queries in a transaction (all queries must succeed) ---> we do this

	const likesOfDeletedJob = await context.prisma.like.findMany({
		where: {
			jobId: Number(args.jobId)
		},
	})

	if (likesOfDeletedJob.length === 0) {
		const deleteJob = await context.prisma.job.delete({
			where: {
				id: Number(args.jobId)
			},
			select: {  // a select határozza meg, hogy mit szeretnék látni a return értékben
				position: true,
				company: true,
			},
		})

		context.pubsub.publish("DELETED_JOB", deleteJob)

		return {
			deleteJob,
			message: 'Listing deleted from "Job" table',
		}

	} else {

		const deleteLike = context.prisma.like.deleteMany({
			where: {
				jobId: Number(args.jobId)
			},
			select: {
				count: true
			}
		})

		let deleteJob = context.prisma.job.delete({
			where: {
				id: Number(args.jobId)
			},
			select: {
				position: true,
				company: true,
			},
		})

		const transaction = await context.prisma.$transaction([deleteLike, deleteJob])
		const deletedLikesCount = transaction[0].count
		deleteJob = transaction[1]
		context.pubsub.publish("DELETED_JOB", deleteJob)

		return {
			deleteJob,
			deletedLikesCount,
			message: 'Listing deleted both from Job and Like tables',
		}
	}
}

export default deleteListing