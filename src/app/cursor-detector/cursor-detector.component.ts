import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor-detector',
  templateUrl: './cursor-detector.component.html',
  styleUrls: ['./cursor-detector.component.css']
})
export class CursorDetectorComponent implements OnInit {

  @ViewChild('container', { static: true }) container: ElementRef;

  isActive = false;

  private changes = 0;
  private entertime = 0;

  heightEvalsDisplay = 0;
  durationDisplay = 0;
  rateDisplay = 0;

  lastMousePosition: MouseEvent = null;

  /**
   * mousePositionAsRatioOfWidth
   */
  get mousePositionAsRatioOfWidth() {
    if (!this.lastMousePosition) {
      return 0;
    }
    return this.lastMousePosition.offsetX / this.container.nativeElement.offsetWidth;
  }

  constructor() { }

  ngOnInit() {
  }

  onMouseMove(event: MouseEvent) {
    this.lastMousePosition = event;
  }

  onMouseEnter() {
    this.isActive = true;
    this.changes = 0;
    this.entertime = new Date().valueOf();
  }

  onMouseLeave() {
    this.isActive = false;
    this.heightEvalsDisplay = this.changes;
    this.durationDisplay = (new Date().valueOf() - this.entertime) / 1000;
    this.rateDisplay = Math.round(this.heightEvalsDisplay * 1000 / this.durationDisplay) / 1000;
  }

  thereWasAChange() {
    this.changes += 1;
  }

}
