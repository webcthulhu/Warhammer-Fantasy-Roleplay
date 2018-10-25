export class Condition {
  name: string;
  description: string;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.description = options.description || 'No description';
  }
}
