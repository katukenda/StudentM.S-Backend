import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterTeachersComponent } from './unregister-teachers.component';

describe('UnregisterTeachersComponent', () => {
  let component: UnregisterTeachersComponent;
  let fixture: ComponentFixture<UnregisterTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisterTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisterTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
