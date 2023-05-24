import { Component, Input } from '@angular/core';
import { Tag } from '../models/tags.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input() tag: Tag = {name: '', color: '', backgroundColor: ''};

}
