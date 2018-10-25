import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {
  public talents;

  constructor(private data: DataService) {
    this.talents = this.data.get('talents');
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
