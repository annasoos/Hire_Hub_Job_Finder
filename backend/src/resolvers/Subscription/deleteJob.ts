import { GraphQLResolveFn } from '../../utils/types';
import { GraphQLSubscriptionFn } from '../../utils/types';

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
