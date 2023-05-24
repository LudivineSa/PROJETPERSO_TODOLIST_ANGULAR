import { Injectable } from '@angular/core';
import { TAGS } from '../models/mock';
import { Tag } from '../models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getTags(): Tag[] {
    return TAGS;
  }

  addTags(tag: Tag): void {
    TAGS.push(tag);
  }

  deleteTags(tag: Tag): void {
    TAGS.splice(TAGS.indexOf(tag), 1);
  }
}
