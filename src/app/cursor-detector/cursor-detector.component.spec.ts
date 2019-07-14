import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorDetectorComponent } from './cursor-detector.component';

describe('CursorDetectorComponent', () => {
  let component: CursorDetectorComponent;
  let fixture: ComponentFixture<CursorDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
