import {Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';
import {Marker} from '@app/shared/models/table-marker';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  markers: Marker[] = [];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getMarkers();
  }

}
