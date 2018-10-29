export class Skill {
  name: string;
  advanced: string;
  grouped: boolean;
  characteristic: string;
  description: string;
  constructor(options) {
    this.name = options.name || 'unknown';
    this.advanced = options.advanced || false;
    this.grouped = options.grouped || false;
    this.characteristic = options.characteristic || '';
    this.description = options.description || 'No description provided yet.';
  }
}
