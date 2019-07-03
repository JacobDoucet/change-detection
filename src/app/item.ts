import * as getRandomName from 'node-random-name';

export interface ItemModel {
  id: string;
  name: string;
}

export function getNewItem(item?: ItemModel, randomizer?: string) {
  item = item || {} as any;
  const { name } = item;
  return {
    id: null,
    name: name || getRandomName({ seed: randomizer })
  };
}

export function getNewItemCollection(size: number): Array<ItemModel> {
  return new Array(size)
    .fill(null)
    .map((val, index) => getNewItem(null, `${index}`));
}

export function compareItems(item1: ItemModel, item2: ItemModel): boolean {
  return Object.keys(item1)
    .map((key) => item1[key] !== item2[key])
    .reduce((acc, val) => acc && val, true);
}

export function assignIds(items: Array<ItemModel>) {
  items.forEach((item, index) => item.id = `ITEM${index + 1}` );
}

export function randomizeName() {
  return getRandomName();
}
