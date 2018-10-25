export class Quality {
  name: string;
  rating: boolean;
  description: string;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.rating = !!options.rating;
    this.description = options.description || 'No description.';
  }
}
