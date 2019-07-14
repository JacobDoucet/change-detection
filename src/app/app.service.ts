import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { assignIds, getNewItemCollection, PersonModel } from './person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private items: BehaviorSubject<Array<PersonModel>> = new BehaviorSubject([]);
  readonly items$ = this.items.asObservable();

  private dummyEvent = new Subject<void>();
  readonly dummyEvent$ = this.dummyEvent.asObservable();

  newItemCollection(size: number) {
    const items = getNewItemCollection(size);
    assignIds(items);
    this.items.next(items);
  }

}
