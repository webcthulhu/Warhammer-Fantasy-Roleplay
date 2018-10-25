import {STATUS} from '../data/careers';

export class Career {
  class: string;
  name: string;
  limitations: string[];
  characteristics: number[];
  levels: string[];
  status?: any;
  skills: string[][];
  talents: string[][];
  trappings?: string[];
  constructor(options) {
    this.class = options.class || 'Unknown';
    this.name = options.name || '';
    this.limitations = options.limitations || [];
    this.characteristics = options.characteristics || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.levels = options.levels || ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
    this.status = options.status || [[STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1], [STATUS.BRASS, 1]];
    this.skills = options.skills || [[], [], [], []];
    this.talents = options.talents || [[], [], [], []];
    this.trappings = options.trappings || [[], [], [], []];
  }
}
