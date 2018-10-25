import {Component, OnInit} from '@angular/core';
import {IQuality} from '../../shared/data/qualities';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss']
})
export class QualitiesComponent implements OnInit {
  public qualities: IQuality[];

  constructor(private data: DataService) {
    this.qualities = this.data.get('qualities');
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
