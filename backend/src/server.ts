import { ApolloServer } from 'apollo-server'
import fs from 'fs'
import path from 'path'
import { getUserId } from './utils'
import { prisma } from './lib/prisma'
import { pubsub } from './lib/pubsub'
// Resolvers define the technique for fetching the types defined in the schema.
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutations/Mutation'
import User from './resolvers/User'
import Job from './resolvers/Job'
import Like from './resolvers/Like'
import Subscription from './resolvers/Subscription/Subscription'

const resolvers = {
  Query,
  Mutation,
	Subscription,
  User,
  Job,
	Like
}

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, '../src/schema.graphql'),
    'utf8'
  ),
  resolvers,
	context: ({ req }) => {
    return {
      ...req,
      prisma,
			pubsub,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
})
// The context argument is a plain JavaScript object that every resolver in the resolver chain can read from and write to. Thus, it is basically a means for resolvers to communicate. Here we creating the context as a function which returns the context.
// Using Prisma to read our actual database
// Using the getUserId function to retrieve the ID of the User. This ID is stored in the JWT that’s set at the Authorization header of the incoming HTTP request. Therefore, you know which User is creating the Job.

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  )