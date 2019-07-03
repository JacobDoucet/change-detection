export interface ItemModel {
  title: string;
}

export function getNewNItems(N: number): Array<ItemModel> {
  return new Array(N).fill(null).map(getNewItem);
}

export function getNewItem(item?: ItemModel) {
  item = item || {} as any;
  const { title } = item;
  return {
    title: title || ''
  };
}
