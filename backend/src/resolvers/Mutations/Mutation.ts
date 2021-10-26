import post from "./Post"
import like from "./Like"
import login from "./Login"
import signup from "./Signup"
import deleteListing from "./DeleteJob"
import updateListing from "./UpdateJob"
import { GraphQLFieldResolveFn } from '../../lib/types'

const Mutation: GraphQLFieldResolveFn = {
	post,
	like,
	signup,
	login,
	deleteListing,
	updateListing
}

export default Mutation;