import { GraphQLResolveInfo } from "graphql/type"

export type Context = Record<string, any>

export type GraphQLResolveFn = (parent: any, args: { [argName: string]: any }, context: Context, info: GraphQLResolveInfo) => any

export type GraphQLFieldResolveFn = {
	[key: string]: GraphQLResolveFn,
}

export type GraphQLSubscriptionFn = {
	subscribe: GraphQLResolveFn,
	resolve: (payload: any) => any
}
