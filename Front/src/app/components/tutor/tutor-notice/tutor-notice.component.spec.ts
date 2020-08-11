import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNoticeComponent } from './tutor-notice.component';

describe('TutorNoticeComponent', () => {
  let component: TutorNoticeComponent;
  let fixture: ComponentFixture<TutorNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
