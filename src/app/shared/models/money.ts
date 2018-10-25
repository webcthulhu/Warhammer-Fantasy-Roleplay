/*
* 1GC = 20/- = 240d
* */

interface IOptions {
  brass?: number;
  silver?: number;
  gold?: number;
}

export class Money {
  brass: number;
  silver: number;
  gold: number;

  constructor(options: IOptions) {
    this.brass = options.brass || 0;
    this.silver = options.silver || 0;
    this.gold = options.gold || 0;
  }

  static toCoins(i: number) {
    let remain = i;
    const gold = Math.floor(remain / 240);
    remain = (gold > 0) ? remain % gold : remain;
    const silver = Math.floor(remain / 12);
    remain = (silver > 0) ? remain % silver : remain;
    return new Money({gold: gold, silver: silver, brass: remain});
  }

  static toGold(i: number) {
    let remain = i;
    const gold = Math.floor(remain / 240);
    remain = (gold > 0) ? remain % gold : remain;
    return new Money({gold: gold, brass: remain});
  }

  static toSilver(i: number) {
    let remain = i;
    const silver = Math.floor(remain / 12);
    remain = (silver > 0) ? remain % silver : remain;
    return new Money({silver: silver, brass: remain});
  }

  static toValue(i: Money) {
    return i.gold * 240 + i.silver * 12 + i.brass;
  }

  static toString(i: Money) {
    const gold = `${i.gold}GC`;
    const silver = `${i.silver}/-`;
    const brass = `${i.brass}d`;
    return [gold, silver, brass].join(' ');
  }
}
