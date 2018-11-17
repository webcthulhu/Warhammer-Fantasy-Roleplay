import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';
import {MARKERS} from '@app/shared/data/table-actors';

const DEFAULTS = {
  URL: 'assets/table/',
  ROWS: 10,
  COLS: 10,
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
    el.nativeElement.append(this.app.view);
    // this.app.renderer.view.style.borderLeft = '1px solid black';
    // this.app.renderer.view.style.borderTop = '1px solid black';
    // this.drawMarker();
  }
  @HostListener('dragover', ['$event']) onDragOver(e) {
    console.log('dragover');
    e.stopPropagation();
    e.preventDefault();
  }
  @HostListener('drop', ['$event']) onDropEnd(e) {
    console.log('drop');
    const name = e.dataTransfer.getData('name');
    const src = e.dataTransfer.getData('src');
    const offset = this.app.renderer.plugins.interaction.mouse.global;
    const x = e.x + offset.x;
    const y = e.y + offset.y;
    console.log(name, x, y);
    this.drawMarker(src, x, y);
  }

  ngOnInit() {
    // Resize
    // app.renderer.autoResize = true;
    // app.renderer.resize(512, 512);
    PIXI.loader
      .add(
        MARKERS.map(m => 'assets/images/markers/' + m.src)
      )
      .load(() => {
        console.log('loaded');
      });
    this.drawGrid();
  }

  drawGrid() {
    const texture = PIXI.Texture.fromImage(`${DEFAULTS.URL}grid-64x64.png`);
    const tilingSprite = new PIXI.extras.TilingSprite(
      texture,
      this.app.screen.width,
      this.app.screen.height
    );
    this.app.stage.addChild(tilingSprite);
  }
  drawMarker(src, x, y) {
    // const texture = new PIXI.Texture.fromImage('assets/images/markers/' + src);
    const texture = PIXI.loader.resources['assets/images/markers/' + src].texture;
    const sprite = new PIXI.Sprite(texture);
    sprite.position.x = x;
    sprite.position.y = y;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    this.app.stage.addChild(sprite);
  }
}
