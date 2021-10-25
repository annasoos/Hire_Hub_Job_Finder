/* Resolvers for subscriptions are slightly different than the ones for queries and mutations:

Rather than returning any data directly, they return an AsyncIterator which subsequently is used by the GraphQL server to push the event data to the client.
Subscription resolvers are wrapped inside an object and need to be provided as the value for a subscribe field. You also need to provide another field called resolve that actually returns the data from the data emitted by the AsyncIterator. */

//------NEW JOB-------

function newJobSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_JOB")
}

const newJob = {
  subscribe: newJobSubscribe,
  resolve: payload => {
    return payload
  },
}

//------DELETE JOB-------

function deleteJobSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("DELETED_JOB")
}

const deleteJob = {
  subscribe: deleteJobSubscribe,
  resolve: payload => {
    return payload
  },
}

//------UPDATE JOB-------

function updateJobSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("UPDATED_JOB")
}

const updateJob = {
  subscribe: updateJobSubscribe,
  resolve: payload => {
    return payload
  },
}

//------EXPORT------

module.exports = {
	newJob,
	deleteJob,
	updateJob
}