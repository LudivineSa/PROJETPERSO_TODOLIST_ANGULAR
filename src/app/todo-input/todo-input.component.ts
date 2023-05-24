import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo.model';
import { TagsService} from '../service/tags.service';
import { Tag } from '../models/tags.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent {

  @Output() hideAddToDo: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id: number = 0;
  todo: Todo = new Todo(0, []);

  displayDescription: boolean = false;

  constructor(private todosService: TodosService, private tagsService: TagsService) { }

  tags: Tag[] = this.tagsService.getTags();

  showInputDescription(): void {
    this.displayDescription = true;
  }

  addToDo(): void {
    this.todo.id = this.id;
    this.todosService.addToDo(this.todo);
    this.todo = new Todo(0, []);
    this.hideAddToDo.emit(false);
  }

  cancel(): void {
    this.todo = new Todo(0, []);
    this.hideAddToDo.emit(false);
  }
}
