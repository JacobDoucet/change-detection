import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor-detector',
  templateUrl: './cursor-detector.component.html',
  styleUrls: ['./cursor-detector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CursorDetectorComponent implements OnInit {

  @ViewChild('container', { static: true }) container: ElementRef;

  private heightEvals = 0;
  private entertime = 0;

  heightEvalsDisplay = 0;
  durationDisplay = 0;
  rateDisplay = 0;

  get height() {
    return this.evaluateHeight();
  }

  lastMousePosition: MouseEvent = null;

  constructor() { }

  ngOnInit() {
  }

  onMouseMove(event: MouseEvent) {
    this.lastMousePosition = event;
  }

  onMouseEnter() {
    this.heightEvals = 0;
    this.entertime = new Date().valueOf();
  }

  onMouseLeave() {
    this.heightEvalsDisplay = this.heightEvals;
    this.durationDisplay = (new Date().valueOf() - this.entertime) / 1000;
    this.rateDisplay = Math.round(this.heightEvalsDisplay * 1000 / this.durationDisplay) / 1000;
  }

  evaluateHeight() {
    this.heightEvals += 1;
    if (!this.lastMousePosition) {
      return '0';
    }
    return getPercentage(this.lastMousePosition.clientX, this.container.nativeElement.offsetWidth);
  }

}

function getPercentage(n, N) {
  return `${(n / N) * 100}%`;
}

