import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';
import {MARKERS} from '@app/shared/data/table-actors';
import * as Phaser from 'phaser/dist/phaser.js';

const DEFAULTS = {
  URL: 'assets/table/',
  ROWS: 10,
  COLS: 10,
  SIZE: 64
};
const CONFIG = {
  width: DEFAULTS.COLS * DEFAULTS.SIZE,
  height: DEFAULTS.ROWS * DEFAULTS.SIZE,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xffffff
};

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  private readonly app: PIXI.Application;
  private grid: PIXI.extras.TilingSprite;
  private readonly background: PIXI.Container;
  private readonly terrain: PIXI.Container;
  private readonly creatures: PIXI.Container;
  private readonly overlay: PIXI.Container;
  constructor(private el: ElementRef) {
    console.log(Phaser);
    this.app = new PIXI.Application(CONFIG);
    this.background = new PIXI.Container();
    this.terrain = new PIXI.Container();
    this.creatures = new PIXI.Container();
    this.overlay = new PIXI.Container();
    this.app.stage.addChild(this.background);
    this.app.stage.addChild(this.terrain);
    this.app.stage.addChild(this.creatures);
    this.app.stage.addChild(this.overlay);
    this.app.renderer.autoResize = true;
    el.nativeElement.append(this.app.view);
  }
  @HostListener('window:resize', ['$event']) onWindowResize(e) {
    this.resizeScreen();
  }
  // @HostListener('document:mousewheel', ['$event']) onMouseWheel(e) {
  //   const scale = this.app.stage.scale;
  //   scale.x = e.deltaY > 0 ? scale.x + .1 : scale.x - .1;
  //   scale.y = e.deltaY > 0 ? scale.y + .1 : scale.y - .1;
  // }
  @HostListener('dragover', ['$event']) onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  @HostListener('drop', ['$event']) onDropEnd(e) {
    const name = e.dataTransfer.getData('name');
    const src = e.dataTransfer.getData('src');
    const offset = this.app.renderer.plugins.interaction.mouse.global;
    const x = Math.round((e.x + offset.x) / DEFAULTS.SIZE) * DEFAULTS.SIZE;
    const y = Math.round((e.y + offset.y) / DEFAULTS.SIZE) * DEFAULTS.SIZE;
    this.drawMarker(src, x, y);
  }

  ngOnInit() {
    PIXI.loader
      .add(
        MARKERS.map(m => 'assets/images/markers/' + m.src)
      )
      .load(() => {
        console.log('Resources loaded.');
        this.drawGrid();
        this.resizeScreen();
      });
  }

  drawGrid() {
    const texture = PIXI.Texture.fromImage(`${DEFAULTS.URL}grid-64x64.png`);
    this.grid = new PIXI.extras.TilingSprite(
      texture,
      this.app.screen.width,
      this.app.screen.height
    );
    this.overlay.addChild(this.grid);
  }
  drawMarker(src, x, y) {
    const texture = PIXI.loader.resources['assets/images/markers/' + src].texture;
    const sprite = new PIXI.Sprite(texture);
    sprite.position.x = x;
    sprite.position.y = y;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    this.creatures.addChild(sprite);
  }
  resizeScreen() {
    this.app.renderer.resize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    this.grid.width = this.app.screen.width;
    this.grid.height = this.app.screen.height;
  }
}
