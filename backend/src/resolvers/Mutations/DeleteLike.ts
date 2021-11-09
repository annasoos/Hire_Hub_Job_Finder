import { GraphQLResolveFn } from "../../utils/types";

const deleteLike: GraphQLResolveFn = async (parent, args, context, info) => {

	const deletedLikeElement = await context.prisma.like.findMany({  // csak findMany-vel működik, de ez mindig csak egy elem lesz
		where: {
			userId: Number(args.userId),
			jobId: Number(args.jobId)
		},
		select: {
			id: true
		}
	})

  const deleteLikeData = await context.prisma.like.delete({
		where: {
			id: deletedLikeElement[0].id
		}
	});

  return {
    deleteLikeData,
		message: 'Removed from favourites'
  };
};

export default deleteLike;
