import {Component, OnDestroy, OnInit} from '@angular/core';
import {Marker} from '@app/shared/models/table-marker';
import {MARKERS} from '@app/shared/data/table-actors';
import {from, fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, OnDestroy {
  markers: Marker[] = MARKERS;
  constructor() { }
  unsubscribe$ = new Subject<void>();
  ngOnInit() {
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  onImageDragStart(event, marker) {
    event.dataTransfer.setData('name', marker.name);
    event.dataTransfer.setData('src', marker.src);
  }
  // onMouseDown(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   // code
  //   this.onMouseMove(e);
  //   this.onMouseUp(e);
  // }
  // onMouseMove(e) {
  //   fromEvent(document, 'mousemove')
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(res => {
  //       console.log('move');
  //     });
  // }
  // onMouseUp(e) {
  //   fromEvent(document, 'mouseup')
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(res => {
  //       console.log('up');
  //       this.unsubscribe$.next();
  //     });
  // }
}
