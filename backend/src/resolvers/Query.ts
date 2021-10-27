import { GraphQLFieldResolveFn } from "../utils/types";

const Query: GraphQLFieldResolveFn = {
  feed: async (parent, args, context, info) => {
    const where = args.input.filter
      ? {
          AND: [
            { position: { contains: args.input.filter.position } },
            { location: { contains: args.input.filter.location } },
            { company: { contains: args.input.filter.company } },
          ],
        }
      : {};

    const jobs = await context.prisma.job.findMany({
      where,
      skip: args.skip,
      take: args.take,
    });
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
		
    const jobs = await context.prisma.job.findMany({ where });
    const count = await context.prisma.job.count({ where });

    return {
      jobs,
      count,
    };
  },

  favourites: async (parent, args, context, info) => {
    const where = {
      likes: {
        every: {
          user: {
            id: context.userId,
          },
        },
      },
    };
    // some returns elements when any one of them matches the condition while every returns elements when all of them matches the condition.
    const jobs = await context.prisma.job.findMany({ where });
    const count = await context.prisma.job.count({ where });

    return {
      jobs,
      count,
    };
  },
};

export default Query;
