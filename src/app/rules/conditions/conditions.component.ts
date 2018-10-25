import {Component, OnInit} from '@angular/core';
import {ICondition} from '../../shared/data/conditions';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {
  public conditions: ICondition[];

  constructor(private data: DataService) {
    this.conditions = this.data.get('conditions');
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }
}
