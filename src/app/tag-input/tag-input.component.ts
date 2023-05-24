import { Component, EventEmitter, Output } from '@angular/core';
import { Tag } from '../models/tags.model';
import { TagsService } from '../service/tags.service';
@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})

export class TagInputComponent {

  @Output() hideCategoryTag: EventEmitter<boolean> = new EventEmitter<boolean>();
  tag: Tag = new Tag('', '#ccc', '#fff');

  constructor(private tagsService: TagsService) { }

  addTag(): void{
    this.tagsService.addTags(this.tag);
    this.hideCategoryTag.emit(false)
  }

  cancel(): void {
    this.hideCategoryTag.emit(false)
  }

}
