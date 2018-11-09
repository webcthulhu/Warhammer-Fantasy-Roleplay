import {Component, ElementRef, OnInit} from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';

const DEFAULTS = {
  URL: 'assets/table/',
  ROWS: 5,
  COLS: 5,
  SIZE: 64
};

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  private app: PIXI.Application;
  constructor(private el: ElementRef) {
    this.app = new PIXI.Application({
      width: DEFAULTS.COLS * DEFAULTS.SIZE,
      height: DEFAULTS.ROWS * DEFAULTS.SIZE,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0xffffff
    });
    this.app.renderer.view.style.borderLeft = '1px solid black';
    this.app.renderer.view.style.borderTop = '1px solid black';
    el.nativeElement.append(this.app.view);
    const texture = new PIXI.Texture.fromImage('assets/images/markers/arbalester.png');
    const sprite = new PIXI.Sprite(texture);
    sprite.x = 50;
    sprite.y = 50;
    // sprite.visible = true;
    this.app.stage.addChild(sprite);
  }

  ngOnInit() {
    // Resize
    // app.renderer.autoResize = true;
    // app.renderer.resize(512, 512);
    this.drawGrid();
  }

  drawGrid() {
  //   for( y coordinate... ) {
  //     for( x coordinate...) {
  //       if(something here) {
  //         gr.lineStyle(0, 0x0000FF, 1);
  //         gr.beginFill(PIXEL COLOR HERE, 1);
  //         gr.drawRect(x+20, y+20, 1, 1);
  //       }
  //     }
  //   }
    const texture = PIXI.Texture.fromImage(`${DEFAULTS.URL}grid-64x64.png`);
    const tilingSprite = new PIXI.extras.TilingSprite(
      texture,
      this.app.screen.width,
      this.app.screen.height
    );
    this.app.stage.addChild(tilingSprite);
  }
}
