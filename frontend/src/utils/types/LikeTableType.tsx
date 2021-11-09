import { JobElementType } from "./JobElementType";
import { LoggedInUserType } from "./LoggedInUserType";

export type LikeTableType = {
	job: JobElementType;
	jobId: number;
	user: LoggedInUserType;
	userId: number;
}