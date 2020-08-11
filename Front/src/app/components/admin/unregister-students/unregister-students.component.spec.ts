import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterStudentsComponent } from './unregister-students.component';

describe('UnregisterStudentsComponent', () => {
  let component: UnregisterStudentsComponent;
  let fixture: ComponentFixture<UnregisterStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisterStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisterStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
