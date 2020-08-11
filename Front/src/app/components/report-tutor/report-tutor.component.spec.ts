import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTutorComponent } from './report-tutor.component';

describe('ReportTutorComponent', () => {
  let component: ReportTutorComponent;
  let fixture: ComponentFixture<ReportTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
