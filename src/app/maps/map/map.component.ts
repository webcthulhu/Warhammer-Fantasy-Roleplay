import {Component, Input, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input('map') set map(value) {
    console.log(value);
  }
  private unsubscribe$ = new Subject();
  public coordinates = {
    x: -50,
    y: -50
  };

  constructor() {
  }

  ngOnInit() {
  }

  onMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    const initial = {
      x: e.clientX,
      y: e.clientY
    };
    this.onMouseMove(initial);
    this.onMouseUp();
  }

  onMouseMove(initial) {
    fromEvent(document, 'mousemove')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((e: MouseEvent) => {
        const delta = {x: e.clientX - initial.x, y: e.clientY - initial.y};
        console.log(delta);
        // this.coordinates = {
        //   x: -50 + delta.x,
        //   y: -50 + delta.y
        // };
      });
  }

  onMouseUp() {
    fromEvent(document, 'mouseup')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((e: MouseEvent) => {
        e.preventDefault();
        this.unsubscribe$.next();
      });
  }

}
