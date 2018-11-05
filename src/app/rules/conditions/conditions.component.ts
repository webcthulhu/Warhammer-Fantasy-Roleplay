import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ICondition} from '@app/shared/data/conditions';
import {DataService} from '@app/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent implements OnInit {
  public conditions: Observable<ICondition[]>;

  constructor(private data: DataService) {
    this.conditions = this.data.conditions;
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }
}
