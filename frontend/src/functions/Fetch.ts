import axios from "axios";
import { JobResponseType } from "../types/JobResponseType";

export async function getData(url: string): Promise<JobResponseType> {
  let response = await axios.get(url);
  let res = await response;
  return res.data;
}
