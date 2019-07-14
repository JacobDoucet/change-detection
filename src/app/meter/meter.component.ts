import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeterComponent implements OnInit, OnChanges {

  @Input() ratio = 0;

  get percent() {
    return `${this.ratio * 100}%`;
  }

  @Output() changes = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('ngOnChanges', this.percent);
    this.changes.emit();

    const person = {
      firstName: 'Jacob',
      lastName: 'Doucet'
    };
  }

}
