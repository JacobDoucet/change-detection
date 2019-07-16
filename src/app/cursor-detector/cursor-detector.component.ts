import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, timer } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { debounce, debounceTime, map, throttleTime } from 'rxjs/operators';

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

  ratio = 0;
  ratio$: Observable<number>;

  constructor() { }

  ngOnInit() {
  }

  onMouseMove(event: MouseEvent) {
    this.ratio = this.getMousePositionAsRatioOfWidth(event);
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

  getMousePositionAsRatioOfWidth(event: MouseEvent) {
    if (!event) {
      return 0;
    }
    return event.offsetX / this.container.nativeElement.offsetWidth;
  }

  thereWasAChange() {
    this.changes += 1;
  }

}

/*
 this.ratio$ = fromEvent<MouseEvent>(this.container.nativeElement, 'mousemove')
      .pipe(
        throttleTime(16),
        map((event) => this.getMousePositionAsRatioOfWidth(event))
      );
 */
