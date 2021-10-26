import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_SECRET, getUserId } from '../../utils';
import { GraphQLResolveFn } from '../../lib/types';

const signup: GraphQLResolveFn  = async (parent, args, context, info) => {
  // the first thing to do is encrypt the User’s password using the bcryptjs library
  const password = await bcrypt.hash(args.password, 10)

  // use PrismaClient instance to store the new User record in the database
  const newUser = await context.prisma.user.create({ data: { ...args, password } })

  // generating a JSON Web Token which is signed with an APP_SECRET
  const token = jwt.sign({ userId: newUser.id }, APP_SECRET)

  // return the token and the user in an object that adheres to the shape of an AuthPayload object from GraphQL schema
  return {
    token,
    newUser,
		message: "User created"
  }
}

export default signup