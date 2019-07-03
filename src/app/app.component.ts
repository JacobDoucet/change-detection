import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { map, tap } from 'rxjs/operators';
import { ItemModel } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemCollectionSizeOptions = [ 3, 30, 300, 600 ];

  items$ = this.appService.items$;

  constructor(private appService: AppService) {
  }

  newItemCollection(size: number) {
    this.appService.newItemCollection(size);
  }

}
