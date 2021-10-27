import { GraphQLResolveFn } from '../../utils/types';
import { GraphQLSubscriptionFn } from '../../utils/types';

const updateJobSubscribe: GraphQLResolveFn = async (parent, args, context, info) => {
  return context.pubsub.asyncIterator("UPDATED_JOB");
}

const updateJob: GraphQLSubscriptionFn = {
  subscribe: updateJobSubscribe,
  resolve: (payload: any) => {
    return payload;
  },
};

export default updateJob;
