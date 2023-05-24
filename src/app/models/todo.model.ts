import { Tags } from "./tags.model";

export class Todo {
  id: number;
  title: string;
  completed: boolean;
  dayCompleted?: Date;
  tags: Tags[];
  description?:string;

  constructor(id: number, tags: Tags[]) {
    this.id = id;
    this.title = '';
    this.completed = false;
    this.tags = tags;
  }
}
