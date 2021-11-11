import { GraphQLResolveFn } from '../../utils/types';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { APP_SECRET, getUserId } from "../../utils/tokenVerification";

const updateUser: GraphQLResolveFn = async (parent, args, context, info) => {
	let updateUserData;
	let token;

	const user = await context.prisma.user.findUnique({
		where: {
			email: args.email
		}
	})

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  } else {
		updateUserData = await context.prisma.user.update({
			where: {
				id: Number(args.userId),
			},
			data: {
				firstName: args.firstName,
				lastName: args.lastName,
				email: args.email,
			},
		})

		token = jwt.sign(
			{
				userId: user.id,
				firstName: args.firstName,
				lastName: args.lastName,
				email: args.email,
			},
			APP_SECRET
		);
	}

	return {
		updateUserData,
		token,
		message: 'User data updated',
	}
}

export default updateUser