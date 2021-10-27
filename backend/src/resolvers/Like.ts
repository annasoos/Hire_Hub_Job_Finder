import { GraphQLFieldResolveFn } from "../utils/types";

const Like: GraphQLFieldResolveFn = {
  job: (parent, args, context) => {
    return context.prisma.like.findUnique({ where: { id: parent.id } }).job();
  },

  user: (parent, args, context) => {
    return context.prisma.like.findUnique({ where: { id: parent.id } }).user();
  },
};

export default Like;
