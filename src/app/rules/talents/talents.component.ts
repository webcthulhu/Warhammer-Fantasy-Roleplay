import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalentsComponent implements OnInit {
  public talents;

  constructor(private data: DataService) {
    this.talents = this.data.talents;
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
