import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public maps = [
    {name: 'bretonnia', src: 'bretonnia.jpg'},
    {name: 'empire', src: 'empire.jpg'},
    {name: 'kislev', src: 'kislev.jpg'},
    {name: 'old world', src: 'old-world.jpg'},
    {name: 'sylvania', src: 'sylvania.jpg'},
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
