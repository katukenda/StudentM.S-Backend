import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSidenavComponent } from './tutor-sidenav.component';

describe('TutorSidenavComponent', () => {
  let component: TutorSidenavComponent;
  let fixture: ComponentFixture<TutorSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
