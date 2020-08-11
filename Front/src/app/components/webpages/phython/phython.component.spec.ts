import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhythonComponent } from './phython.component';

describe('PhythonComponent', () => {
  let component: PhythonComponent;
  let fixture: ComponentFixture<PhythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
