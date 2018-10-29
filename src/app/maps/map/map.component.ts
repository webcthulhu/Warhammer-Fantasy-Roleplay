import {Component, Input, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface IPoi {
  id: string;
  type: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input('map') set map(value) { /* name, src */
    console.log(value);
    this.name = value.name;
    this.src = value.src;
    // get pois
  }
  public name: string = null;
  public src: string = null;
  public pois: IPoi[] = [];
  public x: number = null;
  public y: number = null;
  private unsubscribe$ = new Subject();
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

  onMarkerClick(id: string) {
    // get description
  }
}
