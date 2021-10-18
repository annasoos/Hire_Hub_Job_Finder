const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path')
const { getUserId } = require('./utils')
// Resolvers define the technique for fetching the types defined in the schema.
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Job = require('./resolvers/Job')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* const { PubSub } = require('apollo-server')
const pubsub = new PubSub() */

const resolvers = {
  Query,
  Mutation,
  User,
  Job
}

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
	context: ({ req }) => {
    return {
      ...req,
      prisma,
			/* pubsub */
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
})
// The context argument is a plain JavaScript object that every resolver in the resolver chain can read from and write to. Thus, it is basically a means for resolvers to communicate. Here we creating the context as a function which returns the context.
// Using Prisma to read our actual database
//Using the getUserId function to retrieve the ID of the User. This ID is stored in the JWT that’s set at the Authorization header of the incoming HTTP request. Therefore, you know which User is creating the Job. 

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  )