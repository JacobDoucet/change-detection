import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-item-collection',
  templateUrl: './person-collection.component.html',
  styleUrls: ['./person-collection.component.css']
})
export class PersonCollectionComponent {

  itemCollectionSizeOptions = [ 3, 30, 300, 600 ];

  items$ = this.appService.items$;

  constructor(private appService: AppService) {
  }

  newItemCollection(size: number) {
    this.appService.newItemCollection(size);
  }

}
