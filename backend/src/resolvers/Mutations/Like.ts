import { GraphQLResolveFn } from '../../lib/types';

const like: GraphQLResolveFn = async (parent, args, context, info) => {
  // validate the incoming JWT with the getUserId helper function. If it’s valid, the function will return the userId of the User who is making the request.
  const userId = context.userId

  // like.create method will be used to create a new Like that’s connected to the User and the Link.
  const newLike = await context.prisma.like.create({
    data: {
      user: { connect: { id: userId } },
      job: { connect: { id: Number(args.jobId) } },
    }
  })

  return newLike
}

export default like