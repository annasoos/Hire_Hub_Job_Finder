function posts(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).posts()
}

function likes(parent, args, context) {
  return context.prisma.job.findUnique({ where: { id: parent.id } }).likes()
}

module.exports = {
  posts,
	likes
}