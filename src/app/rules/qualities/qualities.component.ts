import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IQuality} from '@app/shared/data/qualities';
import {DataService} from '@app/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesComponent implements OnInit {
  public qualities: Observable<IQuality[]>;

  constructor(private data: DataService) {
    this.qualities = this.data.qualities;
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
