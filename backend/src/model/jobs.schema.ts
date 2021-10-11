import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
	{
  position: { type: String, default: null },
  company: { type: String, default: null },
  level: { type: String, default: null },
  location: { type: String, default: null },
  skills: { type: Array, default: null },
  description: { type: String, default: null },
	creator: { type: String, deafult: null }
	},
	{
		collection: "jobs"
	}
);

// we define the Mongoose Schema , which determines the shape of our MongoDB documents

export const Job = mongoose.model("job", JobSchema);