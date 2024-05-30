import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCoursesComponent } from './launch-courses.component';

describe('LaunchCoursesComponent', () => {
  let component: LaunchCoursesComponent;
  let fixture: ComponentFixture<LaunchCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchCoursesComponent]
    });
    fixture = TestBed.createComponent(LaunchCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
