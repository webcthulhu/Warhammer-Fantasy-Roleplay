export class Skill {
  name: string;
  type: string;
  grouped: boolean;
  description: string;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.type = options.type || 'Unknown';
    this.grouped = options.grouped || false;
    this.description = options.description || 'No description provided yet.';
  }
}
