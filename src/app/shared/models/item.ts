export class Item {
  name: string;
  cost: number;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.cost = options.cost || 0;
  }
}
