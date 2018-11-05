import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareersComponent implements OnInit {
  public careers;
  constructor(private data: DataService) {
    this.careers = this.data.careers;
  }
  ngOnInit() {
  }
  trackByFn(item, index) {
    return item.name;
  }
}
