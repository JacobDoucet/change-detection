import { Component, Input, OnInit } from '@angular/core';
import { compareItems, getNewItem, ItemModel, randomizeName } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;
  private originalItem: ItemModel;

  get dirty(): boolean {
    console.log('SLOW DOWN');
    return compareItems(this.item, this.originalItem);
  }

  constructor() { }

  ngOnInit() {
    this.originalItem = getNewItem(this.item);
  }

  clickRandomizeName() {
    setTimeout(() => this.randomizeName(), 1);
  }

  randomizeName() {
    this.item.name = randomizeName();
  }

}
