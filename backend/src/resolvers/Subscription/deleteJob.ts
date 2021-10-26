import { GraphQLResolveFn } from '../../lib/types';
import { GraphQLSubscriptionFn } from '../../lib/types';

const deleteJobSubscribe: GraphQLResolveFn = async (parent, args, context, info) => {
  return context.pubsub.asyncIterator("DELETED_JOB");
}

const deleteJob: GraphQLSubscriptionFn = {
  subscribe: deleteJobSubscribe,
  resolve: (payload: any) => {
    return payload;
  },
};

export default deleteJob;
