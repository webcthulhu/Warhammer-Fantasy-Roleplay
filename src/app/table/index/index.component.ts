import {Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';
import {Marker} from '@app/shared/models/table-marker';
import {MARKERS} from '@app/shared/data/table-actors';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  markers: Marker[] = MARKERS;

  constructor(private data: DataService) {
    const app = new PIXI.Application();
    console.log(app);
  }

  ngOnInit() {
    this.data.getMarkers();
  }
}
