import { Todo } from "./todo.model";
import { Tag } from "./tags.model";

export const TAGS : Tag[] = [
  {
    name: 'Travail',
    color: '#FFF',
    backgroundColor: '#007bff'
  },
  {
    name: 'Personnel',
    color: '#FFF',
    backgroundColor: '#28a745'
  }
]

export const TODOS: Todo[] = [{
  id: 1,
  title: 'Faire une todo list',
  completed: true,
  dayCompleted: new Date(),
  tags: [TAGS[0], TAGS[1]],
}, {
  id: 2,
  title: 'Faire le css',
  completed: false,
  tags: [TAGS[1]]
}];


