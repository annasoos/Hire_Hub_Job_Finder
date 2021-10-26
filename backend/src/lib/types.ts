import { GraphQLResolveInfo } from "graphql/type"

export type GraphQLResolveFn = (parent: any, args: { [argName: string]: any }, context: any, info: GraphQLResolveInfo) => any

export type GraphQLFieldResolveFn = {
	[key: string]: GraphQLResolveFn,
}

export type GraphQLSubscriptionFn = {
	subscribe: GraphQLResolveFn,
	resolve: (payload: any) => any
}
