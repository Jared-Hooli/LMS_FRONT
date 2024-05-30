import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBadgesComponent } from './view-badges.component';

describe('ViewBadgesComponent', () => {
  let component: ViewBadgesComponent;
  let fixture: ComponentFixture<ViewBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBadgesComponent]
    });
    fixture = TestBed.createComponent(ViewBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
