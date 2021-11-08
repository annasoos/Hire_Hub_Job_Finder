import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_SECRET, getUserId } from '../../utils/tokenVerification';
import { GraphQLResolveFn } from '../../utils/types';

const signup: GraphQLResolveFn  = async (parent, args, context, info) => {

	const user = await context.prisma.user.findUnique({
		where: {
			email: args.email
		}
	})

  if (user) {
    throw new Error('Already registered')
  }

  const password = await bcrypt.hash(args.password, 10)
  const newUser = await context.prisma.user.create({ data: { ...args, password } })
  // generating a JSON Web Token which is signed with an APP_SECRET
  const token = jwt.sign({ userId: newUser.id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email }, APP_SECRET)

  return {
    token,
    newUser,
		message: "User created"
  }
}

export default signup