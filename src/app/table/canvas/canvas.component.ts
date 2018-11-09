import {Component, ElementRef, OnInit} from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor(private el: ElementRef) {
    const app = new PIXI.Application();
    console.log(app);
  }

  ngOnInit() {
  }

}
