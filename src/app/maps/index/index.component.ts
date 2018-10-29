import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public maps = [
    {
      name: 'empire', src: 'assets/images/empire.jpg',
      points: [
        {x: 0, y: 0, type: 'town', id: '010533'}
      ]
    },
    {
      name: 'bretonia', src: 'assets/images/empire.jpg',
      points: [
        {x: 0, y: 0, type: 'town', id: '010533'}
      ]
    }
  ];
  private mapSource: Subject<any> = new Subject();
  private mapObservable = this.mapSource.asObservable();

  constructor() {
  }

  ngOnInit() {
  }

  get map$() {
    return this.mapObservable;
  }

  set map(value) {
    this.mapSource.next(value);
  }
}
