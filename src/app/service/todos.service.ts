import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { today, deleteItemFromArray} from '../models/utils';

import { TODOS, TAGS } from '../models/mock';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  nextId(): number {
    return this.allTodos.length + 1;
  }

  getToDos(): Todo[] {
    return this.allTodos;
  }

  allTodos: Todo[] = TODOS;
  todos: Todo[] = this.allTodos.filter((todo) => JSON.stringify(todo.dueDate) !== JSON.stringify(today));
  todosDueToday : Todo[] = this.allTodos.filter((todo) => JSON.stringify(todo.dueDate) === JSON.stringify(today));

  getToDosDueToday(): Todo[] {
    return this.todosDueToday
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  updateToDos(todo: Todo): void{
    if(JSON.stringify(todo.dueDate) === JSON.stringify(today)){
      this.todosDueToday.push(todo)
      deleteItemFromArray(todo, this.todos)
    } else {
      this.todos.push(todo)
      deleteItemFromArray(todo, this.todosDueToday)
    }
  }

  editToDoById(todo: Todo): void {
    deleteItemFromArray(todo, this.allTodos);
  }

  addToDo(todo: Todo): void {
    this.allTodos.push(todo)
  }

  deleteToDo(todo: Todo): void {
    deleteItemFromArray(todo, this.allTodos);
    deleteItemFromArray(todo, this.todos);
    deleteItemFromArray(todo, this.todosDueToday);
  }
}
