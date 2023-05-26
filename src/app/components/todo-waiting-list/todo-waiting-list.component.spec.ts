import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWaitingListComponent } from './todo-waiting-list.component';

describe('TodoWaitingListComponent', () => {
  let component: TodoWaitingListComponent;
  let fixture: ComponentFixture<TodoWaitingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoWaitingListComponent]
    });
    fixture = TestBed.createComponent(TodoWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
