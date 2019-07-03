import * as getRandomName from 'node-random-name';

export interface ItemModel {
  name: string;
}

export function getNewItem(item?: ItemModel, randomizer?: string) {
  item = item || {} as any;
  const { name } = item;
  return {
    name: name || getRandomName({ seed: randomizer })
  };
}

export function getNewItemCollection(size: number): Array<ItemModel> {
  return new Array(size)
    .fill(null)
    .map((val, index) => getNewItem(null, `${index}`));
}

export function randomizeName() {
  return getRandomName();
}
