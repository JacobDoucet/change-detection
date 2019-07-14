import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { comparePersons, getNewPerson, PersonModel, randomizeName } from '../person';

@Component({
  selector: 'app-item',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent implements OnInit {

  @Input() person: PersonModel;
  private originalPerson: PersonModel;

  get dirty(): boolean {
    console.log(`get dirty(${this.originalPerson.name} === ${this.person.name})`);
    return comparePersons(this.person, this.originalPerson);
  }

  constructor() { }

  ngOnInit() {
    this.originalPerson = getNewPerson(this.person);
  }

  clickRandomizeName() {
    setTimeout(() => this.randomizeName(), 1);
  }

  randomizeName() {
    this.person.name = randomizeName();
  }

}
