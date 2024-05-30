import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingReportComponent } from './view-training-report.component';

describe('ViewTrainingReportComponent', () => {
  let component: ViewTrainingReportComponent;
  let fixture: ComponentFixture<ViewTrainingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrainingReportComponent]
    });
    fixture = TestBed.createComponent(ViewTrainingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
