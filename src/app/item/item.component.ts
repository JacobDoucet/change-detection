import { Component, Input, OnInit } from '@angular/core';
import { getNewItem, ItemModel } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;
  private originalItem: ItemModel;

  get dirty(): boolean {
    console.log('get dirty()');
    return Object.keys(this.item)
      .map((key) => this.item[key] !== this.originalItem[key])
      .reduce((acc, val) => acc && val, true);
  }

  constructor() { }

  ngOnInit() {
    console.log('ItemComponent.ngOnInit');
    this.originalItem = getNewItem(this.item);
  }

}
