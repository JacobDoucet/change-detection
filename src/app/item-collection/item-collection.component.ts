import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-item-collection',
  templateUrl: './item-collection.component.html',
  styleUrls: ['./item-collection.component.css']
})
export class ItemCollectionComponent {

  itemCollectionSizeOptions = [ 3, 30, 300, 600 ];

  items$ = this.appService.items$;

  constructor(private appService: AppService) {
  }

  newItemCollection(size: number) {
    this.appService.newItemCollection(size);
  }

}
