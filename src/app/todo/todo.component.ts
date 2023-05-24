import { Component } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private todosService: TodosService) { }

  todos = this.todosService.getToDos();

  showTodo: boolean = false;
  showCategoryTag: boolean = false;

  showAddToDo(): void {
    this.showTodo = true;
    this.newToDo = new Todo(this.todosService.nextId(), [])
  }

  showAddCategoryTag(): void {
    this.showCategoryTag = true;
  }

  hideAddToDo(value: boolean): void {
    this.showTodo = value;
  }

  hideAddCategory(value: boolean): void {
    this.showCategoryTag = value;
  }

  newToDo = new Todo(this.todosService.nextId(), [])

}
