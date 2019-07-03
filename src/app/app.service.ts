import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getNewNItems, ItemModel } from './item.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private items: BehaviorSubject<Array<ItemModel>> = new BehaviorSubject([]);
  readonly items$ = this.items.asObservable();

  constructor() {
    this.items$.pipe(
      map((items: Array<ItemModel>) => items.length),
      tap((N) => console.log(`Emitted ${N} items.`))
    ).subscribe();
  }

  setNumItems(num: number) {
    this.items.next(getNewNItems(num));
  }

}
