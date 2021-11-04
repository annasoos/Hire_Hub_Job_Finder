import { LikeTableType } from "./LikeTableType";

export type JobElementType = {
	position: string
	company: string
	level: string | undefined
	location: string
	skills: string
	description: string
	creator: {
		id: number
		email: string
	}
	likes: LikeTableType[]
}