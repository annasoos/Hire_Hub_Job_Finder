function job(parent, args, context) {
  return context.prisma.like.findUnique({ where: { id: parent.id } }).job()
}

function user(parent, args, context) {
  return context.prisma.like.findUnique({ where: { id: parent.id } }).user()
}

module.exports = {
  job,
  user,
}