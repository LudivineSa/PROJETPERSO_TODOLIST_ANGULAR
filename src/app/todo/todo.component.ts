import { Component } from '@angular/core';
import { TodosService } from '../service/todos.service';

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

  nextId = this.todos.length + 1;

}
