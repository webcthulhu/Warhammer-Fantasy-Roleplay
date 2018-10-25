interface ISkill {
  name: string;
  type: SKILL_TYPES;
  grouped: boolean;
  description?: string;
}

export enum BASIC {
  ART = 'art',
  ATHLETICS = 'athletics',
  BRIBERY = 'bribery',
  CHARM = 'charm',
  CHARM_ANIMAL = 'charm animal',
  CLIMB = 'climb',
  COOL = 'cool',
  CONSUME_ALCOHOL = 'consume alcohol',
  DODGE = 'dodge',
  DRIVE = 'drive',
  ENDURANCE = 'endurance',
  ENTERTAIN = 'entertain',
  GAMBLE = 'gamble',
  GOSSIP = 'gossip',
  HAGGLE = 'haggle',
  INTIMIDATE = 'intimidate',
  INTUITION = 'intuition',
  LEADERSHIP = 'leadership',
  MELEE = 'melee',
  NAVIGATION = 'navigation',
  OUTDOOR_SURVIVAL = 'outdoor survival',
  PERCEPTION = 'perception',
  RIDE = 'ride',
  ROW = 'row',
  STEALTH = 'stealth'
}

export enum ADVANCED {
  ANIMAL_CARE = 'animal care',
  ANIMAL_TRAINING = 'animal training',
  CHANNELLING = 'channelling',
  EVALUATE = 'evaluate',
  HEAL = 'heal',
  LANGUAGE = 'language',
  LORE = 'lore',
  PERFORM = 'perform',
  PICK_LOCK = 'pick lock',
  PLAY = 'play',
  PRAY = 'pray',
  RANGED = 'ranged',
  RESEARCH = 'research',
  SAIL = 'sail',
  SECRET_SIGNS = 'secret signs',
  SET_TRAP = 'set trap',
  SLEIGHT_OF_HAND = 'sleight of hand',
  SWIM = 'swim',
  TRACK = 'track',
  TRADE = 'trade'
}

export enum GROUP {
  ANIMAL_TRAINING = 'animal training',
  ART = 'art',
  CHANNELLING = 'channelling',
  ENTERTAIN = 'entertain',
  LANGUAGE = 'language',
  LORE = 'lore',
  MELEE = 'melee',
  PERFORM = 'perform',
  PLAY = 'play',
  RANGED = 'ranged',
  RIDE = 'ride',
  SAIL = 'sail',
  SECRET_SIGNS = 'secret signs',
  STEALTH = 'stealth',
  TRADE = 'trade'
}

export enum SPECS {
  DEMIGRYPH = 'demigryph',
  DOG = 'dog',
  HORSE = 'horse',
  PEGASUS = 'pegasus',
  PIGEON = 'pigeon',
  CARTOGRAPHY = 'cartography',
  ENGRAVING = 'engraving',
  MOSAICS = 'mosaics',
  PAINTING = 'painting',
  SCULPTURE = 'sculpture',
  TATTOO = 'tattoo',
  WEAVING = 'weaving',
  AQSHY = 'aqshy',
  AZYR = 'azyr',
  CHAMON = 'chamon',
  DHAR = 'dhar',
  GHUR = 'ghur',
  GHYRAN = 'ghyran',
  HYSH = 'hysh',
  SHYISH = 'shyish',
  ULGU = 'ulgu',
  ACTING = 'acting',
  COMEDY = 'comedy',
  SINGING = 'singing',
  STORYTELLING = 'storytelling',
  ALBION = 'albion',
  BATTLE_TONGUE = 'battle tongue',
  BRETONNIAN = 'bretonnian',
  CLASSICAL = 'classical',
  ELTHARIN = 'eltharin',
  ESTALIAN = 'estalian',
  GOSPODARINYI = 'gospodarinyi',
  GRUMBARTH = 'grumbarth',
  GUILDER = 'guilder',
  KHAZALID = 'khazalid',
  MAGICK = 'magick',
  MOOTISH = 'mootish',
  NORSE = 'norse',
  QUEEKISH = 'queekish',
  REIKSPIEL = 'reikspiel',
  THIEF = 'thief',
  TILEAN = 'tilean',
  WASTELANDER = 'wastelander',
  CHEMISTRY = 'chemistry',
  ENGINEERING = 'engineering',
  GEOLOGY = 'geology',
  HERALDRY = 'heraldry',
  HISTORY = 'history',
  LAW = 'law',
  MEDICINE = 'medicine',
  METALLURGY = 'metallurgy',
  PLANTS = 'plants',
  SCIENCE = 'science',
  THEOLOGY = 'theology',
  BASIC = 'basic',
  BRAWLING = 'brawling',
  CAVALRY = 'cavalry',
  FENCING = 'fencing',
  FLAIL = 'flail',
  PARRY = 'parry',
  POLEARM = 'pole-arm',
  TWOHANDED = 'two-handed',
  ACROBATICS = 'acrobatics',
  CLOWNING = 'clowning',
  DANCING = 'dancing',
  FIREBREATHING = 'firebreathing',
  JUGGLING = 'juggling',
  MIMING = 'miming',
  ROPE_WALKING = 'rope walking',
  BAGPIPE = 'bagpipe',
  LUTE = 'lute',
  HARPSICHORD = 'harpsichord',
  HORN = 'horn',
  VIOLIN = 'violin',
  BLACKPOWDER = 'blackpowder',
  BOW = 'bow',
  CROSSBOW = 'crossbow',
  ENTANGLING = 'entangling',
  EXPLOSIVES = 'explosives',
  SLING = 'sling',
  THROWING = 'throwing',
  GREAT_WOLF = 'great wolf',
  GRIFFON = 'griffon',
  BARGE = 'barge',
  CARAVEL = 'caravel',
  COG = 'cog',
  FRIGATE = 'frigate',
  WOLFSHIP = 'wolfship',
  GREY_ORDER = 'grey order',
  RANGER = 'ranger',
  SCOUT = 'scout',
  VAGABOND = 'vagabond',
  RURAL = 'rural',
  UNDERGROUND = 'underground',
  URBAN = 'urban',
  APOTHECARY = 'apothecary',
  CALLIGRAPHER = 'calligrapher',
  CHANDLER = 'chandler',
  CARPENTER = 'carpenter',
  COOK = 'cook',
  EMBALMER = 'embalmer',
  POISONER = 'poisoner',
  SMITH = 'smith',
  TANNER = 'tanner'
}

export enum SKILL_TYPES {
  BASIC = 'basic',
  ADVANCED = 'advanced'
}

export enum SKILLS {
  ART_ANY = 'art (any)',
  ART_CALLIGRAPHY = 'art (calligraphy)',
  ART_CARTOGRAPHY = 'art (cartography)',
  ART_ENGRAVING = 'art (engraving)',
  ART_ICONS = 'art (icons)',
  ART_MOSAICS = 'art (mosaics)',
  ART_PAINTING = 'art (painting)',
  ART_SCULPTURE = 'art (sculpture)',
  ART_TATTOO = 'art (tattoo)',
  ART_WEAVING = 'art (weaving)',
  ART_WRITING = 'art (writing)',
  ATHLETICS = 'athletics',
  BRIBERY = 'bribery',
  CHARM = 'charm',
  CHARM_ANIMAL = 'charm animal',
  CLIMB = 'climb',
  COOL = 'cool',
  CONSUME_ALCOHOL = 'consume alcohol',
  DODGE = 'dodge',
  DRIVE = 'drive',
  ENDURANCE = 'endurance',
  ENTERTAIN_ANY = 'entertain (any)',
  ENTERTAIN_ACT = 'entertain (act)',
  ENTERTAIN_ACTING = 'entertain (acting)',
  ENTERTAIN_COMEDY = 'entertain (comedy)',
  ENTERTAIN_FORTUNE_TELLING = 'entertain (fortune telling)',
  ENTERTAIN_LECTURE = 'entertain (lecture)',
  ENTERTAIN_PROPHECY = 'entertain (prophecy)',
  ENTERTAIN_RHETORIC = 'entertain (rhetoric)',
  ENTERTAIN_SINGING = 'entertain (singing)',
  ENTERTAIN_SPEECHES = 'entertain (speeches)',
  ENTERTAIN_STORYTELLING = 'entertain (storytelling)',
  GAMBLE = 'gamble',
  GOSSIP = 'gossip',
  HAGGLE = 'haggle',
  INTIMIDATE = 'intimidate',
  INTUITION = 'intuition',
  LEADERSHIP = 'leadership',
  MELEE_ANY = 'melee (any)',
  MELEE_BASIC = 'melee (basic)',
  MELEE_BRAWLING = 'melee (brawling)',
  MELEE_CAVALRY = 'melee (cavalry)',
  MELEE_FENCING = 'melee (fencing)',
  MELEE_FLAIL = 'melee (flail)',
  MELEE_PARRY = 'melee (parry)',
  MELEE_POLEARM = 'melee (pole-arm)',
  MELEE_TWOHANDED = 'melee (two-handed)',
  NAVIGATION = 'navigation',
  OUTDOOR_SURVIVAL = 'survival',
  PERCEPTION = 'perception',
  RIDE_ANY = 'ride (any)',
  RIDE_DEMIGRYPH = 'ride (demigryph)',
  RIDE_GREAT_WOLF = 'ride (great wolf)',
  RIDE_GRIFFON = 'ride (griffon)',
  RIDE_HORSE = 'ride (horse)',
  RIDE_PEGASUS = 'ride (pegasus)',
  ROW = 'row',
  STEALTH_ANY = 'stealth (any)',
  STEALTH_RURAL = 'stealth (rural)',
  STEALTH_UNDERGROUND = 'stealth (underground)',
  STEALTH_URBAN = 'stealth (urban)',
  ANIMAL_CARE = 'animal care',
  ANIMAL_TRAINING_ANY = 'animal training (any)',
  ANIMAL_TRAINING_DEMIGRYPH = 'animal training (demigryph)',
  ANIMAL_TRAINING_DOG = 'animal training (dog)',
  ANIMAL_TRAINING_HORSE = 'animal training (horse)',
  ANIMAL_TRAINING_PEGASUS = 'animal training (pegasus)',
  ANIMAL_TRAINING_PIGEON = 'animal training (pigeon)',
  CHANNELLING_ANY = 'channelling (any)',
  CHANNELLING_AQSHY = 'channelling (aqshy)',
  CHANNELLING_AZYR = 'channelling (azyr)',
  CHANNELLING_CHAMON = 'channelling (chamon)',
  CHANNELLING_DHAR = 'channelling (dhar)',
  CHANNELLING_GHUR = 'channelling (ghur)',
  CHANNELLING_GHYRAN = 'channelling (ghyran)',
  CHANNELLING_HYSH = 'channelling (hysh)',
  CHANNELLING_SHYISH = 'channelling (shyish)',
  CHANNELLING_ULGU = 'channelling (ulgu)',
  EVALUATE = 'evaluate',
  HEAL = 'heal',
  LANGUAGE_ANY = 'language (any)',
  LANGUAGE_ALBION = 'language (albion)',
  LANGUAGE_BATTLE = 'language (battle)',
  LANGUAGE_BRETONNIAN = 'language (bretonnian)',
  LANGUAGE_CLASSICAL = 'language (classical)',
  LANGUAGE_ELTHARIN = 'language (eltharin)',
  LANGUAGE_ESTALIAN = 'language (estalian)',
  LANGUAGE_GOSPODARINYI = 'language (gospodarinyi)',
  LANGUAGE_GRUMBARTH = 'language (grumbarth)',
  LANGUAGE_GUILDER = 'language (guilder)',
  LANGUAGE_KHAZALID = 'language (khazalid)',
  LANGUAGE_MAGICK = 'language (magick)',
  LANGUAGE_MOOTISH = 'language (mootish)',
  LANGUAGE_NORSE = 'language (norse)',
  LANGUAGE_QUEEKISH = 'language (queekish)',
  LANGUAGE_REIKSPIEL = 'language (reikspiel)',
  LANGUAGE_THIEF = 'language (thief)',
  LANGUAGE_TILEAN = 'language (tilean)',
  LANGUAGE_WASTELANDER = 'language (wastelander)',
  LORE_ANY = 'lore (any)',
  LORE_ANATOMY = 'lore (anatomy)',
  LORE_ART = 'lore (art)',
  LORE_ASTROLOGY = 'lore (astrology)',
  LORE_BEASTS = 'lore (beasts)',
  LORE_CHEMISTRY = 'lore (chemistry)',
  LORE_CHAOS = 'lore (chaos)',
  LORE_DRAGONS = 'lore (dragons)',
  LORE_EMPIRE = 'lore (empire)',
  LORE_ENGINEERING = 'lore (engineering)',
  LORE_FOLKLORE = 'lore (folklore)',
  LORE_GENEALOGY = 'lore (genealogy)',
  LORE_GEOLOGY = 'lore (geology)',
  LORE_GIANTS = 'lore (giants)',
  LORE_HERALDRY = 'lore (heraldry)',
  LORE_HERBS = 'lore (herbs)',
  LORE_HISTORY = 'lore (history)',
  LORE_LAW = 'lore (law)',
  LORE_LOCAL = 'lore (local)',
  LORE_MAGIC = 'lore (magic)',
  LORE_MEDICINE = 'lore (medicine)',
  LORE_METALLURGY = 'lore (metallurgy)',
  LORE_NOBLE = 'lore (noble)',
  LORE_PLANTS = 'lore (plants)',
  LORE_POISON = 'lore (poison)',
  LORE_POLITICS = 'lore (politics)',
  LORE_PROPHECY = 'lore (prophecy)',
  LORE_ROUTES = 'lore (routes)',
  LORE_SCIENCE = 'lore (science)',
  LORE_SIGMAR = 'lore (sigmar)',
  LORE_SPIRITS = 'lore (spirits)',
  LORE_THEOLOGY = 'lore (theology)',
  LORE_TROLLS = 'lore (trolls)',
  LORE_WARFARE = 'lore (warfare)',
  PERFORM_ANY = 'perform (any)',
  PERFORM_ACROBATICS = 'perform (acrobatics)',
  PERFORM_CLOWNING = 'perform (clowning)',
  PERFORM_DANCING = 'perform (dancing)',
  PERFORM_FIREBREATHING = 'perform (firebreathing)',
  PERFORM_JUGGLING = 'perform (juggling)',
  PERFORM_MIMING = 'perform (miming)',
  PERFORM_ROPE_WALKING = 'perform (rope_walking)',
  PICK_LOCK = 'pick lock',
  PLAY_ANY = 'play (any)',
  PLAY_BAGPIPE = 'play (bagpipe)',
  PLAY_DRUM = 'play (drum)',
  PLAY_FIFE = 'play (fife)',
  PLAY_LUTE = 'play (lute)',
  PLAY_HARPSICHORD = 'play (harpsichord)',
  PLAY_HORN = 'play (horn)',
  PLAY_VIOLIN = 'play (violin)',
  PRAY = 'pray',
  RANGED_ANY = 'ranged (any)',
  RANGED_BLACKPOWDER = 'ranged (blackpowder)',
  RANGED_BOW = 'ranged (bow)',
  RANGED_CROSSBOW = 'ranged (crossbow)',
  RANGED_ENGINEERING = 'ranged (engineering)',
  RANGED_ENTANGLING = 'ranged (entangling)',
  RANGED_EXPLOSIVES = 'ranged (explosives)',
  RANGED_SLING = 'ranged (sling)',
  RANGED_THROWN = 'ranged (throwing)',
  RESEARCH = 'research',
  SAIL_ANY = 'sail (any)',
  SAIL_BARGE = 'sail (barge)',
  SAIL_CARAVEL = 'sail (caravel)',
  SAIL_COG = 'sail (cog)',
  SAIL_FRIGATE = 'sail (frigate)',
  SAIL_WOLFSHIP = 'sail (wolfship)',
  SECRET_SIGNS_ANY = 'secret signs (any)',
  SECRET_SIGNS_GREY_ORDER = 'secret signs (grey order)',
  SECRET_SIGNS_GUILDER = 'secret signs (guilder)',
  SECRET_SIGNS_HUNTER = 'secret signs (hunter)',
  SECRET_SIGNS_KNIGHTLY_ORDER = 'secret signs (knightly order)',
  SECRET_SIGNS_MINER = 'secret signs (miner)',
  SECRET_SIGNS_RANGER = 'secret signs (ranger)',
  SECRET_SIGNS_SCOUT = 'secret signs (scout)',
  SECRET_SIGNS_THIEF = 'secret signs (thief)',
  SECRET_SIGNS_VAGABOND = 'secret signs (vagabond)',
  SET_TRAP = 'set trap',
  SLEIGHT_OF_HAND = 'sleight of hand',
  SWIM = 'swim',
  TRACK = 'track',
  TRADE_ANY = 'trade (any)',
  TRADE_APOTHECARY = 'trade (apothecary)',
  TRADE_ART_SUPPLIES = 'trade (art supplies)',
  TRADE_BARBER = 'trade (barber)',
  TRADE_BREWER = 'trade (brewer)',
  TRADE_CALLIGRAPHER = 'trade (calligrapher)',
  TRADE_CHANDLER = 'trade (chandler)',
  TRADE_CARPENTER = 'trade (carpenter)',
  TRADE_CARTOGRAPHER = 'trade (cartographer)',
  TRADE_CHARMS = 'trade (charms)',
  TRADE_COOK = 'trade (cook)',
  TRADE_ENGINEER = 'trade (engineer)',
  TRADE_EXPLOSIVES = 'trade (explosives)',
  TRADE_EMBALMER = 'trade (embalmer)',
  TRADE_FARRIER = 'trade (farrier)',
  TRADE_GUNSMITH = 'trade (gunsmith)',
  TRADE_HERBALIST = 'trade (herbalist)',
  TRADE_POISONER = 'trade (poisoner)',
  TRADE_PRINTING = 'trade (printing)',
  TRADE_SMITH = 'trade (smith)',
  TRADE_TANNER = 'trade (tanner)',
  TRADE_VINTNER = 'trade (vintner)',
  TRADE_WRITING = 'trade (writing)'
}

export const Skills: ISkill[] = [
  {
    name: BASIC.ART,
    type: SKILL_TYPES.BASIC,
    grouped: true
  },
  {
    name: BASIC.ATHLETICS,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.BRIBERY,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.CHARM,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.CHARM_ANIMAL,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.CLIMB,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.COOL,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.CONSUME_ALCOHOL,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.DODGE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.DRIVE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.ENDURANCE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.ENTERTAIN,
    type: SKILL_TYPES.BASIC,
    grouped: true
  },
  {
    name: BASIC.GAMBLE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.GOSSIP,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.HAGGLE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.INTIMIDATE,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.INTUITION,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.LEADERSHIP,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.MELEE,
    type: SKILL_TYPES.BASIC,
    grouped: true
  },
  {
    name: BASIC.NAVIGATION,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.OUTDOOR_SURVIVAL,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.PERCEPTION,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.RIDE,
    type: SKILL_TYPES.BASIC,
    grouped: true
  },
  {
    name: BASIC.ROW,
    type: SKILL_TYPES.BASIC,
    grouped: false
  },
  {
    name: BASIC.STEALTH,
    type: SKILL_TYPES.BASIC,
    grouped: true
  },
  {
    name: ADVANCED.ANIMAL_CARE,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.ANIMAL_TRAINING,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.CHANNELLING,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.EVALUATE,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.HEAL,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.LANGUAGE,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.LORE,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.PERFORM,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.PICK_LOCK,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.PLAY,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.PRAY,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.RANGED,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.RESEARCH,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.SAIL,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.SECRET_SIGNS,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  },
  {
    name: ADVANCED.SET_TRAP,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.SLEIGHT_OF_HAND,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.SWIM,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.TRACK,
    type: SKILL_TYPES.ADVANCED,
    grouped: false
  },
  {
    name: ADVANCED.TRADE,
    type: SKILL_TYPES.ADVANCED,
    grouped: true
  }
];
