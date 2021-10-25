const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// All Prisma CRUD operations are asynchronous. Apollo Server is capable of detecting, and automatically resolving any Promise object that is returned from resolver functions.

//-------------------------POST----------------------------

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

//------------------------SIGNUP----------------------------

async function signup(parent, args, context, info) {
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

//-------------------------LOGIN----------------------------

async function login(parent, args, context, info) {
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

//--------------------------LIKE---------------------------

async function like(parent, args, context, info) {
  // validate the incoming JWT with the getUserId helper function. If it’s valid, the function will return the userId of the User who is making the request.
  const userId = context.userId

  // like.create method will be used to create a new Like that’s connected to the User and the Link.
  const newLike = await context.prisma.like.create({
    data: {
      user: { connect: { id: userId } },
      job: { connect: { id: Number(args.jobId) } },
    }
  })

  return newLike
}

//------------------------DELETE JOB-----------------------

async function deleteJob(parent, args, context, info) {

	// If the job I would like to delete has any likes, we need to use cascading deletes, beacuse of the relations between the two tables.
	// To resolve this error, you can:
		 // Make the relation optional
		// Change the author of the posts to another user before deleting the user
		// Delete a user and all their posts with two separate queries in a transaction (all queries must succeed) ---> we do this

	const likesOfDeletedJob = await context.prisma.like.findMany({
		where: {
			jobId: Number(args.jobId)
		},
	})

	if (likesOfDeletedJob.length === 0) {
		const deleteJob = await context.prisma.job.delete({
			where: {
				id: Number(args.jobId)
			},
			select: {  // a select határozza meg, hogy mit szeretnék látni a return értékben
				position: true,
				company: true,
			},
		})

		context.pubsub.publish("DELETED_JOB", deleteJob)

		return {
			deleteJob,
			message: 'Listing deleted from "Job" table',
		}

	} else {
			
		let deleteLike = context.prisma.like.deleteMany({
			where: {
				jobId: Number(args.jobId)
			},
			select: {
				count: true
			}
		})

		let deleteJob = context.prisma.job.delete({
			where: {
				id: Number(args.jobId)
			},
			select: { 
				position: true,
				company: true,
			},
		})
		
		const transaction = await context.prisma.$transaction([deleteLike, deleteJob])
		const deletedLikesCount = transaction[0].count
		deleteJob = transaction[1]
		context.pubsub.publish("DELETED_JOB", deleteJob)
		
		return {
			deleteJob,
			deletedLikesCount,
			message: 'Listing deleted both from Job and Like tables',
		}
	}
}

//------------------------UPDATE JOB-----------------------

async function updateJob(parent, args, context, info) {
	const updateJob = await context.prisma.job.update({
		where: {
			id: Number(args.jobId)
		},
		data: {
			level: args.level,
			skills: args.skills,
			description: args.description,
		},
	})

	context.pubsub.publish("UPDATED_JOB", updateJob)

	return {
		updateJob,
		message: 'Listing updated',
	}
}

//-------------------------EXPORT---------------------------

module.exports = {
  signup,
  login,
  post,
	like,
	deleteJob,
	updateJob
}