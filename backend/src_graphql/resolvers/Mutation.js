const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// All Prisma CRUD operations are asynchronous. This is not a problem as Apollo Server is capable of detecting, and automatically resolving any Promise object that is returned from resolver functions.

//----------------------------POST------------------------------

async function post (parent, args, context, info) {
	const { userId } = context;

	// Using the getUserId function to retrieve the ID of the User. This ID is stored in the JWT that’s set at the Authorization header of the incoming HTTP request. Therefore, you know which User is creating the Job. 

	const newJob = await context.prisma.job.create({
		data: {
			position: args.position,
			level: args.level,
			location: args.location,
			company: args.company,
			skills: args.skills,
			description: args.description,
			creator: { connect: { id: userId }} // using that userId to connect the Job to be created with the User who is creating it. This is happening through a nested write.
		},
	})

	context.pubsub.publish("NEW_JOB", newJob)

	return newJob
}

//----------------------SIGNUP--------------------------------

async function signup(parent, args, context, info) {
  // the first thing to do is encrypt the User’s password using the bcryptjs library
  const password = await bcrypt.hash(args.password, 10)

  // use PrismaClient instance to store the new User record in the database
  const newUser = await context.prisma.user.create({ data: { ...args, password } })

  // generating a JSON Web Token which is signed with an APP_SECRET
  const token = jwt.sign({ userId: newUser.id }, APP_SECRET)

	context.pubsub.publish("NEW_USER", newUser)

  // return the token and the user in an object that adheres to the shape of an AuthPayload object from GraphQL schema
  return {
    token,
    newUser,
  }
}

//-------------------------LOGIN------------------------------

async function login(parent, args, context, info) {
  // using PrismaClient instance to retrieve an existing User record by the email address that was sent along as an argument in the login mutation
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
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
  }
}

//-----------------------------LIKE-----------------------

async function like(parent, args, context, info) {
  // validate the incoming JWT with the getUserId helper function. If it’s valid, the function will return the userId of the User who is making the request.
  const userId = context.userId

  // like.create method will be used to create a new Like that’s connected to the User and the Link.
  const newLike = context.prisma.like.create({
    data: {
      user: { connect: { id: userId } },
      job: { connect: { id: Number(args.jobId) } },
    }
  })

  return newLike
}

module.exports = {
  signup,
  login,
  post,
	like
}