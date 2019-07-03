import * as getRandomName from 'node-random-name';

export interface ItemModel {
  name: string;
}

export function getNewNItems(N: number): Array<ItemModel> {
  return new Array(N).fill(null).map((val, index) => getNewItem(null, `${index}`));
}

export function getNewItem(item?: ItemModel, randomizer?: string) {
  item = item || {} as any;
  const { name } = item;
  return {
    name: name || getRandomName({ seed: randomizer })
  };
}
