import * as getRandomName from 'node-random-name';

export interface PersonModel {
  id?: string;
  name?: string;
  originalName?: string;
}

export function getNewPerson(item?: PersonModel, randomizer?: string) {
  item = item || {} as any;
  const { name } = item;
  return {
    id: null,
    name: name || getRandomName({ seed: randomizer })
  };
}

export function updatePersonName(person: PersonModel, name: string) {
  const newPerson = Object.assign({}, person) as PersonModel;
  newPerson.name = name;
  return newPerson;
}

export function getNewItemCollection(size: number): Array<PersonModel> {
  return new Array(size)
    .fill(null)
    .map((val, index) => getNewPerson(null, `${index}`));
}

export function comparePersons(person1: PersonModel, person2: PersonModel): boolean {
  return Object.keys(person1)
    .map((key) => person1[key] !== person2[key])
    .reduce((acc, val) => acc && val, true);
}

export function assignIds(items: Array<PersonModel>) {
  items.forEach((item, index) => item.id = `ITEM${index + 1}` );
}

export function randomizeName() {
  return getRandomName();
}
