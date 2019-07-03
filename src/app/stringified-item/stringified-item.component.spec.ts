import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringifiedItemComponent } from './stringified-item.component';

describe('StringifiedItemComponent', () => {
  let component: StringifiedItemComponent;
  let fixture: ComponentFixture<StringifiedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringifiedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringifiedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
