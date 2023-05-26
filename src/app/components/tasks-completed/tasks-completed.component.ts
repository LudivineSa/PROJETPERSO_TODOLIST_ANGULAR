import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/service/models/todo.model';
import { DatePipe } from '@angular/common';
import { TodosService } from '../../shared/service/todos.service';
@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.css']
})
export class TasksCompletedComponent {

  @Input() todo: Todo = new Todo(0, []);

  constructor(private datePipe: DatePipe, private todosService: TodosService) { }

  deleteTask(): void {
    this.todosService.deleteToDo(this.todo)
  }
}
