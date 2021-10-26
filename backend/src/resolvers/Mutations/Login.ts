import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { GraphQLResolveFn } from '../../lib/types';
import { APP_SECRET, getUserId } from '../../utils';

const login: GraphQLResolveFn = async (parent, args, context, info) => {
  // using PrismaClient instance to retrieve an existing User record by the email address that was sent along as an argument in the login mutation
  const user = await context.prisma.user.findUnique({
		where: {
			email: args.email
		}
	})
  if (!user) {
    throw new Error('No such user found')
  }

  // compare the provided password with the one that is stored in the database
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  //  returning token and user again
  return {
    token,
    user,
		message: "User successfully logged in"
  }
}

export default login