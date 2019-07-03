import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { assignIds, getNewItemCollection, ItemModel } from './item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private items: BehaviorSubject<Array<ItemModel>> = new BehaviorSubject([]);
  readonly items$ = this.items.asObservable();

  newItemCollection(size: number) {
    const items = getNewItemCollection(size);
    assignIds(items);
    this.items.next(items);
  }

}
