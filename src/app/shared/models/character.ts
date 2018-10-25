import { SIZES } from '../data/constants';
import { CLASSES } from '../data/careers';
import { SPECIES } from '../data/species';

interface ICharacter {
  name: string;
  species: SPECIES;
}

class Creature {
  static readonly SIZE_WOUNDS = {
    [SIZES.TINY]: (sb: number, tb: number, wb: number) => 1,
    [SIZES.LITTLE]: (sb: number, tb: number, wb: number) => tb,
    [SIZES.SMALL]: (sb: number, tb: number, wb: number) => 2 * tb + wb,
    [SIZES.AVERAGE]: (sb: number, tb: number, wb: number) => sb + 2 * tb + wb,
    [SIZES.LARGE]: (sb: number, tb: number, wb: number) => (sb + 2 * tb + wb) * 2,
    [SIZES.ENORMOUS]: (sb: number, tb: number, wb: number) => (sb + 2 * tb + wb) * 4,
    [SIZES.MONSTROUS]: (sb: number, tb: number, wb: number) => (sb + 2 * tb + wb) * 8
  };
  public characteristics: number[];
  constructor(options) {
    this.characteristics = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  static getCharacteristicBonus(i: number): number {
    return Math.floor(i / 10);
  }
  static getInitialWounds(size: SIZES, sb: number, tb: number, wb: number): number {
    return Character.SIZE_WOUNDS[size](sb, tb, wb);
  }
}

class Character extends Creature {
  name: string;
  characteristics: number[];
  constructor(options) {
    super(options);
  }
}
