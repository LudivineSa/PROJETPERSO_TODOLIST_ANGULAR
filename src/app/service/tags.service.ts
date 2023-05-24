import { Injectable } from '@angular/core';
import { TAGS } from '../models/mock';
import { Tags } from '../models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor() { }

  getTypes(): Tags[] {
    return TAGS;
  }
}
