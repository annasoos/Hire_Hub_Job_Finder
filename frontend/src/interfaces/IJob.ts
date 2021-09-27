export interface IJob {
  id: number | string;
  position: string;
  company: string;
  level: string;
  location: string;
  skills: string[];
  description: string;
}