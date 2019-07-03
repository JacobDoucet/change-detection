import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringified-item',
  templateUrl: './stringified-item.component.html',
  styleUrls: ['./stringified-item.component.css']
})
export class StringifiedItemComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

}
