export enum SPECIES {
  HUMAN = 'human',
  HALFLING = 'halfling',
  DWARF = 'dwarf',
  HIGH_ELF = 'high elf',
  WOOD_ELF = 'wood elf'
}

interface ISpecies {
  name: string;
  weapon_skill: number;
  ballistic_skill: number;
  strength: number;
  toughness: number;
  initiative: number;
  agility: number;
  dexterity: number;
  intelligence: number;
  willpower: number;
  fellowship: number;
  fate: number;
  resilience: number;
  extra_points: number;
  movement: number;
  size?: string;
  wounds(sb: number, tb: number, wb: number): number;
}

const Species: ISpecies[] = [
  {
    name: 'human',
    weapon_skill: 20,
    ballistic_skill: 20,
    strength: 20,
    toughness: 20,
    initiative: 20,
    agility: 20,
    dexterity: 20,
    intelligence: 20,
    willpower: 20,
    fellowship: 20,
    fate: 2,
    resilience: 1,
    extra_points: 3,
    movement: 4,
    wounds: (sb, tb, wb) => sb + 2 * tb + wb
  },
  {
    name: 'dwarf',
    weapon_skill: 30,
    ballistic_skill: 20,
    strength: 20,
    toughness: 30,
    initiative: 20,
    agility: 10,
    dexterity: 30,
    intelligence: 20,
    willpower: 40,
    fellowship: 10,
    fate: 0,
    resilience: 2,
    extra_points: 2,
    movement: 3,
    wounds: (sb, tb, wb) => sb + 2 * tb + wb
  },
  {
    name: 'halfling',
    weapon_skill: 10,
    ballistic_skill: 30,
    strength: 10,
    toughness: 20,
    initiative: 20,
    agility: 20,
    dexterity: 30,
    intelligence: 20,
    willpower: 30,
    fellowship: 30,
    fate: 0,
    resilience: 2,
    extra_points: 3,
    movement: 3,
    wounds: (sb, tb, wb) => 2 * tb + wb
  },
  {
    name: 'elf',
    weapon_skill: 30,
    ballistic_skill: 30,
    strength: 20,
    toughness: 20,
    initiative: 40,
    agility: 30,
    dexterity: 30,
    intelligence: 30,
    willpower: 30,
    fellowship: 20,
    fate: 0,
    resilience: 0,
    extra_points: 2,
    movement: 5,
    wounds: (sb, tb, wb) => sb + 2 * tb + wb
  },
];
