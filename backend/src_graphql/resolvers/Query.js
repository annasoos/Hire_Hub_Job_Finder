function feed(parent, args, context, info) {
  return context.prisma.job.findMany()
}

module.exports = {
  feed,
}