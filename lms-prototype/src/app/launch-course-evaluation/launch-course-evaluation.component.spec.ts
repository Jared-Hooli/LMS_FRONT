import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCourseEvaluationComponent } from './launch-course-evaluation.component';

describe('LaunchCourseEvaluationComponent', () => {
  let component: LaunchCourseEvaluationComponent;
  let fixture: ComponentFixture<LaunchCourseEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchCourseEvaluationComponent]
    });
    fixture = TestBed.createComponent(LaunchCourseEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
