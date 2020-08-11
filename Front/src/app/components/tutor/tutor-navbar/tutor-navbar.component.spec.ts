import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNavbarComponent } from './tutor-navbar.component';

describe('TutorNavbarComponent', () => {
  let component: TutorNavbarComponent;
  let fixture: ComponentFixture<TutorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
