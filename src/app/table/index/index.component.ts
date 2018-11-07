import {Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';
import {Marker} from '@app/shared/models/table-marker';
import {MARKERS} from '@app/shared/data/table-actors';
import * as PIXI from 'pixi.js';
import {Path} from '@app/shared/models/svg-path';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  markers: Marker[] = MARKERS;

  constructor(private data: DataService) {
    // const app = new PIXI.Application();
    const path1 = new Path()
      .move(0, 0)
      .line(100, 0)
      .vertical(100)
      .horizontal(-100)
      .close()
      .fill('#fff')
      .stroke('#000')
      .finalize();
    const path2 = new Path().from('M10 10H90V90H10Z');

  }

  ngOnInit() {
    this.data.getMarkers();
  }
  svg_test() {
    ['M 10 10', 'H 90', 'V 90', 'L 10 10', 'Z'].join(' ');
  }
}
