import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringified-item',
  templateUrl: './stringified-item.component.html',
  styleUrls: ['./stringified-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringifiedItemComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

}
