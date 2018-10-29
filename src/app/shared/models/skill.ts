export class Skill {
  name: string;
  type: string;
  grouped: boolean;
  characteristic: string;
  description: string;
  constructor(options) {
    this.name = options.name || 'Unknown';
    this.type = options.type || 'Unknown';
    this.grouped = options.grouped || false;
    this.characteristic = options.characteristic || '';
    this.description = options.description || 'No description provided yet.';
  }
}
