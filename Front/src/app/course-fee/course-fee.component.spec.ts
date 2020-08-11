import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFeeComponent } from './course-fee.component';

describe('CourseFeeComponent', () => {
  let component: CourseFeeComponent;
  let fixture: ComponentFixture<CourseFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
