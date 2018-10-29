import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/data.service';

@Component({
  selector: 'app-trappings',
  templateUrl: './trappings.component.html',
  styleUrls: ['./trappings.component.scss']
})
export class TrappingsComponent implements OnInit {
  public trappings;

  constructor(private data: DataService) {
    this.trappings = this.data.get('trappings');
  }

  ngOnInit() {
  }

}
