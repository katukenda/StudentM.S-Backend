import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesJavaForBeginnersComponent } from './files-java-for-beginners.component';

describe('FilesJavaForBeginnersComponent', () => {
  let component: FilesJavaForBeginnersComponent;
  let fixture: ComponentFixture<FilesJavaForBeginnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesJavaForBeginnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesJavaForBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
