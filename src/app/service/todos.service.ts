import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';

import { TODOS, TAGS } from '../models/mock';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  nextId(): number {
    return TODOS.length + 1;
  }

  getToDos(): Todo[] {
    return TODOS;
  }

  editToDoById(todo: Todo): void {
    const indexItemToDelete = TODOS.findIndex((item) => item.id === todo.id);
    if(indexItemToDelete !== -1) {
      TODOS.splice(indexItemToDelete, 1, todo);
    }
  }

  createToDo(): void {
    TODOS.push({
      id: TODOS.length + 1,
      title: '',
      completed: false,
      tags: [TAGS[0]]
    });
  }

  addToDo(todo: Todo): void {
    TODOS.push(todo)
  }

  deleteToDo(todo: Todo): void {
    const indexItemToDelete = TODOS.findIndex((item) => item.id === todo.id);
    if(indexItemToDelete !== -1) {
      TODOS.splice(indexItemToDelete, 1);
    }
  }
}
