import post from "./Post"
import like from "./Like"
import login from "./Login"
import signup from "./Signup"
import deleteListing from "./DeleteJob"
import updateListing from "./UpdateJob"
import updateUser from "./UpdateUser"
import { GraphQLFieldResolveFn } from '../../utils/types'

const Mutation: GraphQLFieldResolveFn = {
	post,
	like,
	signup,
	login,
	deleteListing,
	updateListing,
	updateUser
}

export default Mutation;