import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCollectionComponent } from './person-collection.component';

describe('PersonCollectionComponent', () => {
  let component: PersonCollectionComponent;
  let fixture: ComponentFixture<PersonCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
