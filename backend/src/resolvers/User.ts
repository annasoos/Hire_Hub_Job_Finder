import { GraphQLFieldResolveFn } from "../utils/types";

const User: GraphQLFieldResolveFn = {
  posts: (parent, args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).posts();
  },

  likes: (parent, args, context) => {
    return context.prisma.job.findUnique({ where: { id: parent.id } }).likes();
  },
};

export default User;
