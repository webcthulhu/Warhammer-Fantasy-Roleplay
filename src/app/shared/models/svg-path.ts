export interface IPathOptions {
  d?: string[];
  fill?: string;
  stroke?: string;
}

export class Path {
  private _d: string[];
  private _fill: string;
  private _stroke: string;
  constructor(options: IPathOptions = {}) {
    this._d = options.d || [];
    this._fill = options.fill || '';
    this._stroke = options.stroke || '';
  }
  close(): Path {
    this._d = this._d.filter(i => !['Z', 'z'].includes(i));
    this._d.push('Z');
    return this;
  }
  finalize() {
    const path = document.createElement('path');
    path.setAttribute('d', this._d.join(' '));
    path.setAttribute('fill', this._fill);
    path.setAttribute('stroke', this._stroke);
    return path;
  }
  fill(value: string): Path {
    this._fill = value;
    return this;
  }
  from(value: string): Path {
    this._d = value.match(/[a-z]+[^a-z]+/gi);
    return this;
  }
  horizontal(x: number): Path {
    this._d.push(`H${x}`);
    return this;
  }
  line(x: number, y: number): Path {
    this._d.push(`L${x} ${y}`);
    return this;
  }
  move(x: number, y: number): Path {
    this._d.push(`M${x} ${y}`);
    return this;
  }
  stroke(value: string): Path {
    this._stroke = value;
    return this;
  }
  vertical(y: number): Path {
    this._d.push(`V${y}`);
    return this;
  }
}
