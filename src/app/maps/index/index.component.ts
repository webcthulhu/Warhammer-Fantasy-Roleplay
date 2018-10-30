import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public maps = [
    {name: 'bretonnia', src: 'bretonnia.jpg', width: 2175, height: 2850},
    {name: 'empire', src: 'empire.jpg', width: 1596, height: 1024},
    {name: 'kislev', src: 'kislev.jpg', width: 2829, height: 2000},
    {name: 'old world', src: 'old-world.jpg', width: 2868, height: 2850},
    {name: 'sylvania', src: 'sylvania.jpg', width: 2121, height: 3000}
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
