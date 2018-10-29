import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
  speciesExpBonus = 25;
  careerExpBonus = 50;
  constructor() { }

  ngOnInit() {
  }

}
