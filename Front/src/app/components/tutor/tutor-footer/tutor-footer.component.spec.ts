import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorFooterComponent } from './tutor-footer.component';

describe('TutorFooterComponent', () => {
  let component: TutorFooterComponent;
  let fixture: ComponentFixture<TutorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
