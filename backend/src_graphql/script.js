// Prisma Client: An auto-generated and type-safe query builder for Node.js & TypeScript. It can be used as an alternative to Prisma bindings to access data in your applications.


// Import the PrismaClient constructor from the @prisma/client node module and instantiate PrismaClient.
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

// Define an async function called main to send queries to the database. You will write all your queries inside this function.
async function main() {
  const allJobs = await prisma.job.findMany()
  console.log(allJobs)
}

// Call the main function.
main()
  .catch(e => {
    throw e
  })
  // Close the database connections when the script terminates.
  .finally(async () => {
    await prisma.$disconnect()
  })