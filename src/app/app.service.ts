import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getNewItemCollection, ItemModel } from './item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private items: BehaviorSubject<Array<ItemModel>> = new BehaviorSubject([]);
  readonly items$ = this.items.asObservable();

  newItemCollection(size: number) {
    this.items.next(getNewItemCollection(size));
  }

}
