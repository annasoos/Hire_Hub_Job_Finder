async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
      OR: [
        { position: { contains: args.filter } },
				{ level: { contains: args.filter } },
				{ location: { contains: args.filter } },
				{ company: { contains: args.filter } },
				{ skills: { contains: args.filter } },
        { description: { contains: args.filter } },
      ],
    }
    : {}

  const jobs = await context.prisma.job.findMany({
    where,
  })

	//If no filter string is provided, then the where object will be just an empty object and no filtering conditions will be applied by Prisma Client when it returns the response for the links query.

  return jobs
}

module.exports = {
  feed,
}