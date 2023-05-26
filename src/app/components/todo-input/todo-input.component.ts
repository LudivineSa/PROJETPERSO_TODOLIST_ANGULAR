import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../../shared/service/todos.service';
import { Todo } from '../../shared/service/models/todo.model';
import { TagsService} from '../../shared/service/tags.service';
import { Tag } from '../../shared/service/models/tags.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent {

  @Output() hideAddToDo: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hideEditToDo: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() todo: Todo = new Todo(0, [])

  displayDescription: boolean = false;

  constructor(private todosService: TodosService, private tagsService: TagsService) { }

  tags: Tag[] = this.tagsService.getTags();

  today : Date = new Date()
  year: number = this.today.getFullYear()
  month: number = this.today.getMonth() + 1
  day: number = this.today.getDate()

  dateToday = this.year + "-" + this.month.toString().padStart(2, "0") + "-" + this.day.toString().padStart(2, "0");


  showInputDescription(): void {
    this.displayDescription = true;
  }

  addOrEditToDo(): void {
    if(this.todo.id === this.todosService.nextId()){
      this.todosService.addToDo(this.todo);
      this.hideAddToDo.emit(false);
    } else {
      this.todosService.editToDoById(this.todo);
      this.hideEditToDo.emit(false);
    }
    this.todosService.updateToDos(this.todo);
    console.log(this.todosService.updateTest)
  }

  cancel(): void {
    this.todo = new Todo(0, []);
    this.hideAddToDo.emit(false);
    this.hideEditToDo.emit(false);
  }

}
