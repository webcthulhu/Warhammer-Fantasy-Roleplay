import { Component, OnInit } from '@angular/core';
import {Marker} from '@app/shared/models/table-marker';
import {MARKERS} from '@app/shared/data/table-actors';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  markers: Marker[] = MARKERS;
  constructor() { }

  ngOnInit() {
  }

}
