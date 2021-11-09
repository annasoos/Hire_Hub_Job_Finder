import { GraphQLResolveFn } from '../../utils/types';

const post: GraphQLResolveFn  = async (parent, args, context, info) => {
	const { userId } = context;

	// Using the getUserId function to retrieve the ID of the User. This ID is stored in the JWT that’s set at the Authorization header of the incoming HTTP request. Therefore, you know which User is creating the Job.

	const newJob = await context.prisma.job.create({
		data: {
			position: args.position,
			level: args.level,
			location: args.location,
			company: args.company,
			skills: args.skills,
			description: args.description,
			creator: { connect: { id: userId }} // using that userId to connect the Job to be created with the User who is creating it. This is happening through a nested write.
		},
	})

	context.pubsub.publish("NEW_JOB", newJob)

	return newJob
}

export default post