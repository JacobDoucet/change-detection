import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { map, tap } from 'rxjs/operators';
import { ItemModel } from './item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routes = this.router.config.filter((route) => route.data && route.data.title);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.config);
  }

}
