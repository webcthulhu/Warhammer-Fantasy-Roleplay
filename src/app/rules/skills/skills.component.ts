import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from '@app/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  public skills;

  constructor(private data: DataService) {
    this.skills = this.data.skills;
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
