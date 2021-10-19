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
		skip: args.skip,
		take: args.take,
  })

	//If no filter string is provided, then the where object will be just an empty object and no filtering conditions will be applied by Prisma Client when it returns the response for the links query.

	//Limit-Offset Pagination:
	//Limit and offset have different names in the Prisma API: The limit is called take, meaning you’re “taking” x elements after a provided start index. The start index is called skip, since you’re skipping that many elements in the list before collecting the items to be returned. If skip is not provided, it’s 0 by default.

	// how many elements are currently stored in the database
	const count = await context.prisma.job.count({ where })

  return {
		jobs,
		count
	}
}

module.exports = {
  feed,
}