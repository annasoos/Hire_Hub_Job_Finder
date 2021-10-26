import { GraphQLResolveFn } from '../../lib/types';

const updateListing: GraphQLResolveFn = async (parent, args, context, info) => {
	const updateJob = await context.prisma.job.update({
		where: {
			id: Number(args.jobId)
		},
		data: {
			level: args.level,
			skills: args.skills,
			description: args.description,
		},
	})

	context.pubsub.publish("UPDATED_JOB", updateJob)

	return {
		updateJob,
		message: 'Listing updated',
	}
}


export default updateListing