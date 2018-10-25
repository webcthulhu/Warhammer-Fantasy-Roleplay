export class Talent {
  name: string;
  max: string;
  test: string;
  description: string;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.max = options.max || 'Unknown';
    this.test = options.test || null;
    this.description = options.description || 'No description';
  }
}
