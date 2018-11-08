export class Marker {
  name: string;
  src: string;
  constructor(options) {
    this.name = options.name || 'unknown';
    this.src = options.src || 'player_01.png';
  }
}
