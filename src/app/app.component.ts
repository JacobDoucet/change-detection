import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { map, tap } from 'rxjs/operators';
import { ItemModel } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = [
    3,
    30,
    300,
    3000
  ];

  items$ = this.appService.items$;

  constructor(private appService: AppService) {
  }

  setNumItems(N: number) {
    this.appService.setNumItems(N);
  }

}
