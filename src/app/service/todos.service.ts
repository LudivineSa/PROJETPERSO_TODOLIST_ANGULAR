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

  updateToDos(todo: Todo): void {
    if (JSON.stringify(todo.dueDate) === JSON.stringify(today)) {
      // check if it's an update or creation
      if (!this.todosDueToday.find((eachTodo) => todo.id === eachTodo.id)) {
        this.todosDueToday.push(todo)
        deleteItemFromArray(todo, this.todos)
      }
    } else {
      // check if it's an update or creation
      if (!this.todos.find((eachTodo) => todo.id === eachTodo.id)) {
        this.todos.push(todo)
        deleteItemFromArray(todo, this.todosDueToday)
      }
    }
  }

  addToDo(todo: Todo): void {
    let todoExists = this.allTodos.find((eachTodo) => eachTodo.id === todo.id);
    if (!todoExists) {
      this.allTodos.push(todo)
    } else {
      // if todo exists, updates it
      todoExists.title = todo.title
      todoExists.completed = todo.completed
      todoExists.dayCompleted = todo.dayCompleted
      todoExists.tags = todo.tags
      todoExists.description = todo.description
      todoExists.urgent = todo.urgent
      todoExists.dueDate = todo.dueDate
    }
    this.updateToDos(todo)
  }

  deleteToDo(todo: Todo): void {
    deleteItemFromArray(todo, this.allTodos);
    deleteItemFromArray(todo, this.todos);
    deleteItemFromArray(todo, this.todosDueToday);
  }
}
