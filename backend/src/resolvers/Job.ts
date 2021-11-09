import { GraphQLFieldResolveFn } from "../utils/types";

const Job: GraphQLFieldResolveFn = {
  creator: (parent, args, context, info) => {
    return context.prisma.job
      .findUnique({ where: { id: parent.id } })
      .creator();
  },
  // In this resolver, first fetching the Job from the database using the prisma instance and then invoke creator on it. Notice that the resolver needs to be called creator because it resolves the creator field from the Job type in schema.graphql.

  likes: (parent, args, context, info) => {
    return context.prisma.job.findUnique({ where: { id: parent.id } }).likes();
  },
};

export default Job;
