import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo.model';
import { TagsService} from '../service/tags.service';
import { Tag } from '../models/tags.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent implements OnInit {

  @Output() hideAddToDo: EventEmitter<void> = new EventEmitter<void>();
  @Output() hideEditToDo: EventEmitter<void> = new EventEmitter<void>();
  @Input() todo: Todo = new Todo(0, [])

  displayDescription: boolean = false;

  constructor(private todosService: TodosService, private tagsService: TagsService) { }

  ngOnInit(): void {
    // clone original todo item, so you don't
    // update it when you cancel
    this.todo = { ...this.todo }
    console.log("ngOnInit", this.todo)
  }

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
    // adding or editing is now the save action
    this.todosService.addToDo(this.todo);
    this.hideAddToDo.emit();
    this.hideEditToDo.emit();
  }

  cancel(): void {
    this.todo = new Todo(0, []);
    this.hideAddToDo.emit();
    this.hideEditToDo.emit();
  }

}
