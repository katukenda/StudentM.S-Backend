import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollmentsComponent } from './course-enrollments.component';

describe('CourseEnrollmentsComponent', () => {
  let component: CourseEnrollmentsComponent;
  let fixture: ComponentFixture<CourseEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
