import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedCoursesComponent } from './view-assigned-courses.component';

describe('ViewAssignedCoursesComponent', () => {
  let component: ViewAssignedCoursesComponent;
  let fixture: ComponentFixture<ViewAssignedCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAssignedCoursesComponent]
    });
    fixture = TestBed.createComponent(ViewAssignedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
