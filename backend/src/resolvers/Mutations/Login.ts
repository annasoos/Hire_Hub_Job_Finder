import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { GraphQLResolveFn } from "../../utils/types";
import { APP_SECRET, getUserId } from "../../utils/tokenVerification";

const login: GraphQLResolveFn = async (parent, args, context, info) => {
  const user = await context.prisma.user.findUnique({
    where: {
      email: args.email,
    },
  });

  if (user) {
    const valid = await bcrypt.compare(args.password, user.password);
    if (valid) {
      const token = jwt.sign(
        {
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        APP_SECRET
      );

      return {
        token,
        user,
        message: "User successfully logged in",
      };
    } else {
			throw new Error('Invalid password')
    }
  } else if (!user) {
		throw new Error('User not found')
  }
};

export default login;
