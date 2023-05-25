import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private todosService: TodosService) { }


  showTodo: boolean = false;
  showCategoryTag: boolean = false;

  todosDueToday = this.todosService.getToDosDueToday();
  todos = this.todosService.getTodos();
  newToDo = new Todo(this.todosService.nextId(), [])

  showAddToDo(): void {
    this.showTodo = true;
    this.newToDo = new Todo(this.todosService.nextId(), [])
  }

  showAddCategoryTag(): void {
    this.showCategoryTag = true;
  }

  hideAddToDo(): void {
    this.showTodo = false;
  }

  hideAddCategory(): void {
    this.showCategoryTag = false;
  }

  ngOnInit() {
    console.log(this.todosDueToday)
  }
}
