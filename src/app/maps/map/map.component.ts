import {Component, Input, OnInit} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DataService} from '../../core/data.service';

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
  @Input('map') set map(value) {
    this.name = value.name;
    this.src = value.src;
    this.width = value.width;
    this.height = value.height;
    this.data.getMapData(this.name).subscribe((res: IPoi[]) => {
      this.pois = res;
    }, () => {
      this.pois = [];
    });
  }
  public name: string = null;
  public src: string = null;
  public width: number = null;
  public height: number = null;
  public pois: IPoi[] = [];
  public x: number = null;
  public y: number = null;
  private unsubscribe$ = new Subject();
  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  onMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    const initial = { x: e.clientX - this.x, y: e.clientY - this.y };
    this.onMouseMove(initial);
    this.onMouseUp();
  }

  onMouseMove(initial) {
    fromEvent(document, 'mousemove')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((e: MouseEvent) => {
        this.x = e.clientX - initial.x;
        this.y = e.clientY - initial.y;
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
