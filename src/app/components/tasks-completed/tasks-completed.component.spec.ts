import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCompletedComponent } from './tasks-completed.component';

describe('TasksCompletedComponent', () => {
  let component: TasksCompletedComponent;
  let fixture: ComponentFixture<TasksCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksCompletedComponent]
    });
    fixture = TestBed.createComponent(TasksCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
