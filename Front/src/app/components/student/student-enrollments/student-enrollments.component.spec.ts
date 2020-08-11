import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentsComponent } from './student-enrollments.component';

describe('StudentEnrollmentsComponent', () => {
  let component: StudentEnrollmentsComponent;
  let fixture: ComponentFixture<StudentEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
