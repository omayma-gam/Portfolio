import {Tag} from './Tags';

export interface Project{
  id:number;
  name:string;
  summary:string;
  description:string;
  projectLink:string;
  picture:string[];
  tags:Tag[];
}
