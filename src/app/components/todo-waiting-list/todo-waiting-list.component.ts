import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/service/models/todo.model';
import { TodosService } from '../../shared/service/todos.service';
@Component({
  selector: 'app-todo-waiting-list',
  templateUrl: './todo-waiting-list.component.html',
  styleUrls: ['./todo-waiting-list.component.css']
})
export class TodoWaitingListComponent {

  @Input() todo: Todo = new Todo(0, []);

  showEdit: boolean = false;

  constructor(private todosService: TodosService) { }

  deleteTask(): void {
    this.todosService.deleteToDo(this.todo)
  }

  editTask(): void {
    this.showEdit = true;
  }

  hideEditToDo(value : boolean): void {
    this.showEdit = value;
  }

}
