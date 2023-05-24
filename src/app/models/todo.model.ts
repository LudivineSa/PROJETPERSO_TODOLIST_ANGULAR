import { Tag } from "./tags.model";

export class Todo {
  id: number;
  title: string;
  completed: boolean;
  dayCompleted?: Date;
  tags: Tag[];
  description?:string;

  constructor(id: number, tags: Tag[]) {
    this.id = id;
    this.title = '';
    this.completed = false;
    this.tags = tags;
  }
}
