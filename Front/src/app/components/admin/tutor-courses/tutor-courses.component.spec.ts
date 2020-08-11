import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCoursesComponent } from './tutor-courses.component';

describe('TutorCoursesComponent', () => {
  let component: TutorCoursesComponent;
  let fixture: ComponentFixture<TutorCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
