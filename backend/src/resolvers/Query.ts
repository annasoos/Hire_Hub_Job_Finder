import { GraphQLFieldResolveFn } from "../utils/types";

const Query: GraphQLFieldResolveFn = {
  feed: async (parent, args, context, info) => {
		const filter = () => {
			if (!args.filter) {
				return {}
			} else if (args.filter && args.filter.isJunior) {
				return ({
					OR: [
						{	level: "Junior" },
						{ level: "" }
					],
					AND: [
            { position: { contains: args.filter.position } },
            { location: { contains: args.filter.location } },
            { company: { contains: args.filter.company } },
          ],
				})
			} else if (args.filter && !args.filter.isJunior) {
				return ({
					AND: [
            { position: { contains: args.filter.position } },
            { location: { contains: args.filter.location } },
            { company: { contains: args.filter.company } },
          ],
				})
			}
		}

    const where = filter()

    const jobs = await context.prisma.job.findMany({ where, skip: args.skip, take: args.take, orderBy: args.orderBy });
    const count = await context.prisma.job.count({ where });

    return {
      jobs,
      count,
    };
  },

  ownListings: async (parent, args, context, info) => {
    const where = {
      creator: {
        id: context.userId,
      },
    };

    const jobs = await context.prisma.job.findMany({ where, orderBy: args.orderBy });
    const count = await context.prisma.job.count({ where });

    return {
      jobs,
      count,
    };
  },

  favourites: async (parent, args, context, info) => {
    const where = {
      likes: {
        some: {
          user: {
            id: context.userId,
          },
        },
      },
    };
    // some returns elements when any one of them matches the condition while every returns elements when all of them matches the condition.
    const jobs = await context.prisma.job.findMany({ where, orderBy: args.orderBy });
    const count = await context.prisma.job.count({ where });

    return {
      jobs,
      count,
    };
  },
};

export default Query;
