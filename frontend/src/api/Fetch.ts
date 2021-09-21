import axios from "axios";
import {IJob} from "../interfaces/interfaces";

export async function getData(url: string): Promise<IJob[]> {
  let response = await axios.get(url);
  let res = await response;
  return res.data;
}
