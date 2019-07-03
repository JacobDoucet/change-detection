import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { getNewItem, ItemModel, randomizeName } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;
  private originalItem: ItemModel;

  get dirty(): boolean {
    console.log('SLOW DOWN');
    return Object.keys(this.item)
      .map((key) => this.item[key] !== this.originalItem[key])
      .reduce((acc, val) => acc && val, true);
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
