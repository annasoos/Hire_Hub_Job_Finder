/* Resolvers for subscriptions are slightly different than the ones for queries and mutations:

Rather than returning any data directly, they return an AsyncIterator which subsequently is used by the GraphQL server to push the event data to the client.
Subscription resolvers are wrapped inside an object and need to be provided as the value for a subscribe field. You also need to provide another field called resolve that actually returns the data from the data emitted by the AsyncIterator. */

import { GraphQLResolveFn } from '../../lib/types';
import { GraphQLSubscriptionFn } from '../../lib/types';

const newJobSubscribe: GraphQLResolveFn = async (parent, args, context, info) => {
  return context.pubsub.asyncIterator("NEW_JOB");
}

const newJob: GraphQLSubscriptionFn = {
  subscribe: newJobSubscribe,
  resolve: (payload: any) => {
    return payload;
  },
};

export default newJob;
