import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills;

  constructor(private data: DataService) {
    this.skills = this.data.get('skills');
  }

  ngOnInit() {
  }

  trackByFn(item, index) {
    return item.name;
  }

}
