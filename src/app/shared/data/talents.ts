export interface ITalent {
  name: string;
  max?: string;
  test?: string;
  description?: string;
}

export enum TALENTS {
  ACCURATE_SHOT = 'accurate shot',
  ACUTE_SENSE = 'acute sense (sense)',
  ACUTE_SENSE_ANY = 'acute sense (any)',
  ACUTE_SENSE_SIGHT = 'acute sense (sight)',
  ACUTE_SENSE_TASTE = 'acute sense (taste)',
  ACUTE_SENSE_TOUCH = 'acute sense (touch)',
  AETHYRIC_ATTUNEMENT = 'aethyric attunement',
  ALLEY_CAT = 'alley cat',
  AMBIDEXTROUS = 'ambidextrous',
  ANIMAL_AFFINITY = 'animal affinity',
  ARCANE_MAGIC = 'arcane magic (lore)',
  ARCANE_MAGIC_ANY = 'arcane magic (any)',
  ARCANE_MAGIC_CELESTIAL = 'arcane magic (celestial)',
  ARCANE_MAGIC_HEDGECRAFT = 'arcane magic (hedgecraft)',
  ARCANE_MAGIC_WITCHERY = 'arcane magic (witchery)',
  ARGUMENTATIVE = 'argumentative',
  ARTISTIC = 'artistic',
  ATTRACTIVE = 'attractive',
  BATTLE_RAGE = 'battle rage',
  BEAT_BLADE = 'beat blade',
  BENEATH_NOTICE = 'beneath notice',
  BERSERK_CHARGE = 'berserk charge',
  BLATHER = 'blather',
  BLESS = 'bless (divine lore)',
  BLESS_ANY = 'bless (any)',
  BOOKISH = 'bookish',
  BREAK_AND_ENTER = 'break and enter',
  BRIBER = 'briber',
  CARDSHARP = 'cardsharp',
  CAREFUL_STRIKE = 'careful strike',
  CAROUSER = 'carouser',
  CATFALL = 'catfall',
  CAT_TONGUED = 'cat-tongued',
  CHAOS_MAGIC = 'chaos magic (lore)',
  COMBAT_AWARE = 'combat aware',
  COMBAT_MASTER = 'combat master',
  COMBAT_REFLEXES = 'combat reflexes',
  COMMANDING_PRESENCE = 'commanding presence',
  CONCOCT = 'concoct',
  CONTORTIONIST = 'contortionist',
  COOLHEADED = 'coolheaded',
  CRACK_THE_WHIP = 'crack the whip',
  CRAFTSMAN = 'craftsman (trade)',
  CRAFTSMAN_ANY = 'craftsman (any)',
  CRAFTSMAN_APOTHECARY = 'craftsman (apothecary)',
  CRAFTSMAN_BOATBUILDER = 'craftsman (boatbuilder)',
  CRAFTSMAN_ENGINEER = 'craftsman (engineer)',
  CRAFTSMAN_EXPLOSIVES = 'craftsman (explosives)',
  CRAFTSMAN_HERBALIST = 'craftsman (herbalist)',
  CRIMINAL = 'criminal',
  DEADEYE_SHOT = 'deadeye shot',
  DEALMAKER = 'dealmaker',
  DETECT_ARTIFACT = 'detect artefact',
  DICEMAN = 'diceman',
  DIRTY_FIGHTING = 'dirty fighting',
  DISARM = 'disarm',
  DISTRACT = 'distract',
  DOOMED = 'doomed',
  DRILLED = 'drilled',
  DUAL_WIELDER = 'dual wielder',
  EMBEZZLE = 'embezzle',
  ENCLOSED_FIGHTER = 'enclosed fighter',
  ETIQUETTE = 'etiquette (social group)',
  ETIQUETTE_ANY = 'etiquette (any)',
  ETIQUETTE_CRIMINALS = 'etiquette (criminals)',
  ETIQUETTE_CULTISTS = 'etiquette (cultists)',
  ETIQUETTE_GUILDER = 'etiquette (guilder)',
  ETIQUETTE_NOBLES = 'etiquette (nobles)',
  ETIQUETTE_SCHOLAR = 'etiquette (scholar)',
  ETIQUETTE_SERVANTS = 'etiquette (servants)',
  ETIQUETTE_SOLDIERS = 'etiquette (soldiers)',
  FAST_HANDS = 'fast hands',
  FAST_SHOT = 'fast shot',
  FEARLESS = 'fearless (enemy)',
  FEARLESS_ANY = 'fearless (any)',
  FEARLESS_ANIMALS = 'fearless (animals)',
  FEARLESS_BEASTMEN = 'fearless (beastmen)',
  FEARLESS_BOUNTIES = 'fearless (bounties)',
  FEARLESS_CRIMINALS = 'fearless (criminals)',
  FEARLESS_EVERYTHING = 'fearless (everything)',
  FEARLESS_HERETICS = 'fearless (heretics)',
  FEARLESS_MONSTERS = 'fearless (monsters)',
  FEARLESS_OUTLAWS = 'fearless (outlaws)',
  FEARLESS_RATS = 'fearless (rats)',
  FEARLESS_RIVERWARDENS = 'fearless (riverwardens)',
  FEARLESS_ROAD_WARDENS = 'fearless (road wardens)',
  FEARLESS_SKAVEN = 'fearless (skaven)',
  FEARLESS_UNDEAD = 'fearless (undead)',
  FEARLESS_WATCHMEN = 'fearless (watchmen)',
  FEARLESS_WITCHES = 'fearless (witches)',
  FEARLESS_WRECKERS = 'fearless (wreckers)',
  FEINT = 'feint',
  FIELD_DRESSING = 'field dressing',
  FISHERMAN = 'fisherman',
  FLAGELLANT = 'flagellant',
  FLEE = 'flee!',
  FLEET_FOOTED = 'fleet footed',
  FRENZY = 'frenzy',
  FRIGHTENING = 'frightening',
  FURIOUS_ASSAULT = 'furious assault',
  GREGARIOUS = 'gregarious',
  GUNNER = 'gunner',
  HARDY = 'hardy',
  HATRED = 'hatred (group)',
  HATRED_ANY = 'hatred (any)',
  HATRED_HERETICS = 'hatred (heretics)',
  HATRED_OUTLAWS = 'hatred (outlaws)',
  HOLY_HATRED = 'holy hatred',
  HOLY_VISIONS = 'holy visions',
  HUNTERS_EYE = 'hunter’s eye',
  IMPASSIONED_ZEAL = 'impassioned zeal',
  IMPLACABLE = 'implacable',
  IN_FIGHTER = 'in-fighter',
  INSPIRING = 'inspiring',
  INSTINCTIVE_DICTION = 'instinctive diction',
  INVOKE = 'invoke (divine lore)',
  INVOKE_ANY = 'invoke (any)',
  IRON_JAW = 'iron jaw',
  IRON_WILL = 'iron will',
  JUMP_UP = 'jump up',
  KINGPIN = 'kingpin',
  LIGHTNING_REFLEXES = 'lightning reflexes',
  LINGUISTICS = 'linguistics',
  LIP_READING = 'lip reading',
  LUCK = 'luck',
  MAGICAL_SENSE = 'magical sense',
  MAGIC_RESISTANCE = 'magic resistance',
  MAGNUS_OPUS = 'magnum opus',
  MARKSMAN = 'marksman',
  MASTER_OF_DISGUISE = 'master of disguise',
  MASTER_ORATOR = 'master orator',
  MASTER_TRADESMAN = 'master tradesman (trade)',
  MASTER_TRADESMAN_ANY = 'master tradesman (any)',
  MASTER_TRADESMAN_APOTHECARY = 'master tradesman (apothecary)',
  MASTER_TRADESMAN_BOATBUILDER = 'master tradesman (boatbuilder)',
  MASTER_TRADESMAN_ENGINEER = 'master tradesman (engineering)',
  MASTER_TRADESMAN_HERBALIST = 'master tradesman (herbalist)',
  MASTER_TRADESMAN_POISONER = 'master tradesman (poisoner)',
  MENACING = 'menacing',
  MIMIC = 'mimic',
  NIGHT_VISION = 'night vision',
  NIMBLE_FINGERED = 'nimble fingered',
  NOBLE_BLOOD = 'noble blood',
  NOSE_FOR_TROUBLE = 'nose for trouble',
  NUMISMATICS = 'numismatics',
  OLD_SALT = 'old salt',
  ORIENTATION = 'orientation',
  PANHANDLE = 'panhandle',
  PERFECT_PITCH = 'perfect pitch',
  PETTY_MAGIC = 'petty magic',
  PHARMACIST = 'pharmacist',
  PILOT = 'pilot',
  PUBLIC_SPEAKER = 'public speaker',
  PURE_SOUL = 'pure soul',
  RAPID_RELOAD = 'rapid reload',
  REACTION_STRIKE = 'reaction strike',
  READ_WRITE = 'read/write',
  RELENTLESS = 'relentless',
  RESISTANCE = 'resistance (threat)',
  RESISTANCE_ANY = 'resistance (any)',
  RESISTANCE_DISEASE = 'resistance (disease)',
  RESISTANCE_POISON = 'resistance (poison)',
  RESOLUTE = 'resolute',
  REVERSAL = 'reversal',
  RIPOSTE = 'riposte',
  RIVER_GUIDE = 'river guide',
  ROBUST = 'robust',
  ROUGHRIDER = 'roughrider',
  ROVER = 'rover',
  SAVANT = 'savant (lore)',
  SAVANT_ANY = 'savant (any)',
  SAVANT_APOTHECARY = 'savant (apothecary)',
  SAVANT_ENGINEERING = 'savant (engineering)',
  SAVANT_HERBS = 'savant (herbs)',
  SAVANT_LAW = 'savant (law)',
  SAVANT_LOCAL = 'savant (local)',
  SAVANT_MEDICINE = 'savant (medicine)',
  SAVANT_RIVERWAYS = 'savant (riverways)',
  SAVANT_THEOLOGY = 'savant (theology)',
  SAVVY = 'savvy',
  SCALE_SHEER_SURFACE = 'scale sheer surface',
  SCHEMER = 'schemer',
  SEA_LEGS = 'sea legs',
  SEASONED_TRAVELLER = 'seasoned traveller',
  SECOND_SIGHT = 'second sight',
  SECRET_IDENTITY = 'secret identity',
  SHADOW = 'shadow',
  SHARP = 'sharp',
  SHARPSHOOTER = 'sharpshooter',
  SHIELDSMAN = 'shieldsman',
  SIXTH_SENSE = 'sixth sense',
  SLAYER = 'slayer',
  SMALL = 'small',
  SNIPER = 'sniper',
  SPEEDREADER = 'speedreader',
  SPRINTER = 'sprinter',
  STEP_ASIDE = 'step aside',
  STONE_SOUP = 'stone soup',
  STOUT_HEARTED = 'stout-hearted',
  STRIDER = 'strider (terrain)',
  STRIDER_ANY = 'strider (any)',
  STRIDER_COASTAL = 'strider (coastal)',
  STRIDER_MARSHES = 'strider (marshes)',
  STRIDER_ROCKY = 'strider (rocky)',
  STRIDER_WOODLANDS = 'strider (woodlands)',
  STRIKE_MIGHTY_BLOW = 'strike mighty blow',
  STRIKE_TO_INJURE = 'strike to injure',
  STRIKE_TO_STUN = 'strike to stun',
  STRONG_BACK = 'strong back',
  STRONG_LEGS = 'strong legs',
  STRONG_MINDED = 'strong-minded',
  STRONG_SWIMMER = 'strong swimmer',
  STURDY = 'sturdy',
  SUAVE = 'suave',
  SUPER_NUMERATE = 'super numerate',
  SUPPORTIVE = 'supportive',
  SURE_SHOT = 'sure shot',
  SURGERY = 'surgery',
  TENACIOUS = 'tenacious',
  TINKER = 'tinker',
  TOWER_OF_MEMORIES = 'tower of memories',
  TRAPPER = 'trapper',
  TRICK_RIDING = 'trick riding',
  TUNNEL_RAT = 'tunnel rat',
  UNSHAKABLE = 'unshakable',
  VERY_RESILIENT = 'very resilient',
  VERY_STRONG = 'very strong',
  WAR_LEADER = 'war leader',
  WAR_WIZARD = 'war wizard',
  WARRIOR_BORN = 'warrior born',
  WATERMAN = 'waterman',
  WEALTHY = 'wealthy',
  WELL_PREPAIRED = 'well-prepared',
  WITCH = 'witch!'
}

export const Talents: ITalent[] = [
  {
    name: TALENTS.ACCURATE_SHOT,
    max: 'Ballistic Skill Bonus',
    test: '',
    description: 'You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons.'
  },
  {
    name: TALENTS.ACUTE_SENSE,
    max: 'Initiative Bonus',
    test: 'Perception (Sense)',
    description: 'One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else’s eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.'
  },
  {
    name: TALENTS.AETHYRIC_ATTUNEMENT,
    max: 'Initiative Bonus',
    test: 'Channel (Any)',
    description: 'Your experience, talent or training lets you more safely manipulate the Winds of Magic. You do not suffer a Miscast if you roll a double on a successful Channel Test.'
  },
  {
    name: TALENTS.ALLEY_CAT,
    max: 'Initiative Bonus',
    test: 'Stealth (Urban)',
    description: 'You are at home in shadowy backstreets. When using Stealth (Urban), you may reverse the dice of any failed Test if this will score a Success.'
  },
  {
    name: TALENTS.AMBIDEXTROUS,
    max: '2',
    test: '',
    description: 'You can use your off-hand far better than most folk, either by training or innate talent. You only suffer a penalty of –10 to Tests relying solely on your secondary hand, not –20. If you have this Talent twice, you suffer no penalty at all.'
  },
  {
    name: TALENTS.ANIMAL_AFFINITY,
    max: 'Willpower Bonus',
    test: 'Charm Animal',
    description: 'Wild animals feel comfortable in your presence, and often follow your lead. All creatures with the Bestial Trait not trained to be belligerent will automatically be calm in your presence unless they have a reason not to be, such as pain, an attack, being naturally hyper-aggressive, or having nearby young.'
  },
  {
    name: TALENTS.ARCANE_MAGIC,
    max: '1',
    test: '',
    description: ''
  },
  {
    name: TALENTS.ARGUMENTATIVE,
    max: 'Fellowship Bonus',
    test: 'Charm Tests when arguing and debating',
    description: 'You are used to arguing your points and winning. If you roll a successful Charm Test to debate with an opponent, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 24 could be used for +4 SL.'
  },
  {
    name: TALENTS.ARTISTIC,
    max: 'Dexterity Bonus',
    test: 'Trade (Artist)',
    description: 'You have a natural talent for art, able to produce precise sketches with nothing but time and appropriate media. This ability has several in-game uses, ranging from creating Wanted Posters to sketching accurate journals, and has spot benefits as determined by the GM. Further to this, add Trade (Artist) to any Career you enter; if it is already in Career, you may instead purchase the Skill for 5 XP fewer per Advance.'
  },
  {
    name: TALENTS.ATTRACTIVE,
    max: 'Fellowship Bonus',
    test: 'Charm Tests to influence those attracted to you',
    description: 'Whether it’s your piercing eyes, your strong frame, or maybe the way you flash your perfect teeth, you know how to make the best use of what the gods gave you. When you successfully use Charm to influence those attracted to you, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 38 could be used for +8 SL.'
  },
  {
    name: TALENTS.BATTLE_RAGE,
    max: 'Willpower Bonus',
    test: 'Melee Tests when Frenzied',
    description: 'You are better able to control your Frenzy in combat. You can end your Frenzy with a successful Cool Test at the end of the round.'
  },
  {
    name: TALENTS.BEAT_BLADE,
    max: 'Weapon Skill Bonus',
    test: 'Melee for a Beat Blade',
    description: 'You are trained to make sharp controlled blows to your opponent’s weapon, creating an opening for an attack or simply impeding an incoming attack. For your Action, you can choose to Beat Blade before rolling. Perform a Melee Test; if successful, your opponent loses –1 Advantage, and loses a further –1 per SL you score. This Test is not Opposed. This Talent is of no use if your opponent has no weapon, or has a larger Size than you (see page 341).'
  },
  {
    name: TALENTS.BENEATH_NOTICE,
    max: 'Fellowship Bonus',
    test: 'Stealth when in plain sight',
    description: 'The high and mighty pay no attention to your presence, knowing you are well beneath their notice. Assuming you are properly attired and not in an incongruous position, those of a higher Status Tier will normally ignore you unless your presence becomes inappropriate, which can make it very easy to listen into conversations you perhaps shouldn’t. Further, characters with a higher Status Tier than you gain no Advantage for striking or wounding you in combat, as there is nothing to be gained for defeating such a lowly cur.'
  },
  {
    name: TALENTS.BERSERK_CHARGE,
    max: 'Strength Bonus',
    test: 'Melee on a Round when you Charge',
    description: 'You hurl yourself at your enemies with reckless abandon, using the force of your charge to add weight to your strikes. When you Charge, you gain +1 Damage to all Melee attacks per level in this Talent.'
  },
  {
    name: TALENTS.BLATHER,
    max: 'Fellowship Bonus',
    test: 'Charm to Blather',
    description: 'Called ‘opening your mouth and letting your belly rumble’ in Nordland, or simply ‘bullshitting’ in Ostland, blathering involves talking rapidly and incessantly, or talking volubly and at-length, about inconsequential or nonsense matters, and is used to verbally confuse and confound a target. You use your Charm Skill to Blather. Attempt an Opposed Charm/Intelligence Test. Success gives your opponent a Stunned Condition. Further, for each level you have in Blather, your opponent gains another Stunned Condition. Targets Stunned by Blather may do nothing other than stare at you dumbfounded as they try to catch-up with or understand what you are saying. Once the last Stunned Condition comes to an end, the target finally gets a word in, and may not be best pleased with you — after all, you have been talking about nothing or nonsense for some time. Should you stop talking, your opponent immediately loses all Stunned Conditions caused by your Blather. Generally, you can only attempt to Blather at a character once per scene, or perhaps longer as determined by the GM, as the target soon wises up to your antics.'
  },
  {
    name: TALENTS.BLESS,
    max: '1',
    test: '',
    description: 'You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity as listed in Chapter 7: Religion and Belief. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.'
  },
  {
    name: TALENTS.BOOKISH,
    max: 'Intelligence Bonus',
    test: 'Research',
    description: 'You are as at home in a library as a seaman at sea or a farmer a-farming. When using Research, you may reverse the dice of any failed Test if this will score a success.'
  },
  {
    name: TALENTS.BREAK_AND_ENTER,
    max: 'Strength Bonus',
    test: 'Melee when forcing or breaking inanimate objects',
    description: 'You are an expert at quickly breaking down doors and forcing entry. You may add +1 Damage for each level in this Talent when determining damage against inanimate objects such as windows, chests, doors, and similar.'
  },
  {
    name: TALENTS.BRIBER,
    max: 'Fellowship Bonus',
    test: 'Bribery',
    description: 'You are an exceedingly skilled briber. The GM should reduce the base cost of any required bribe by 10% per level you have in Briber, to a minimum of 10% of the original amount.'
  },
  {
    name: TALENTS.CARDSHARP,
    max: 'Intelligence Bonus',
    test: 'Gamble and Sleight of Hand when playing card games',
    description: 'You are used to playing, and winning, at cards, although your methods may involve a little cheating. When you successfully use Gamble or Sleight of Hand when playing cards, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 28 could be used for +8 SL. If you play a real card game to represent what is happening in-game, you may receive an extra number of cards per deal equal to your level in Cardsharp, then discard down to the appropriate hand-size before each round of play.'
  },
  {
    name: TALENTS.CAREFUL_STRIKE,
    max: 'Initiative Bonus',
    test: '',
    description: 'You are skilled at hitting your enemy exactly where you want to, either at range or in melee. You may modify your Hit Location result by up to +/–10 per time you have this Talent. So, if you had this Talent twice and hit location 34, the Right Arm, you could modify this down to 14, the Left Arm, or up to 54, the Body (see page 159).'
  },
  {
    name: TALENTS.CAROUSER,
    max: 'Toughness Bonus',
    test: 'Charm at Parties, Gossip at Parties, Consume Alcohol',
    description: 'You are a seasoned drinker and know how to party hard. You may reverse the dice of any failed Consume Alcohol Test if this will score a Success.'
  },
  {
    name: TALENTS.CATFALL,
    max: 'Agility Bonus',
    test: 'Athletics when falling',
    description: 'You are nimble and balanced like a cat, and are able to fall much greater distances unharmed than others might. Whenever you fall, you attempt an Athletics Test. If successful, reduce the distance fallen by 1 yard, +1 extra yard per +1 SL scored, for the purposes of calculating Damage.'
  },
  {
    name: TALENTS.CAT_TONGUED,
    max: 'Fellowship Bonus',
    test: 'Charm when lying',
    description: 'Like Ranald the Trickster God, you blend truth and lies as if there were no difference. When using Charm to lie, listeners do not get to oppose your Charm with their Intuition to detect if there is something fishy in what you say.'
  },
  {
    name: TALENTS.CHAOS_MAGIC,
    max: 'Number of Spells available in chosen Chaos Magic Lore',
    test: '',
    description: 'By accident or design you have lost a portion of your soul to one of the Dark Gods, and can now practice the foul magics of Chaos. Your ruinous patron immediately grants you access to a single spell from the chosen Lore (most commonly the Nurgle, Slaanesh, or Tzeentch Lores) and you gain a Corruption point as the spell infiltrates your mind, never to be forgotten. Each time you take this Talent, which always costs 100 XP per time instead of the normal cost, you learn another spell from your chosen Lore and gain a Corruption point. For more about the available spells, see Chapter 8: Magic. Under normal circumstances, you may only ever know one Lore of Chaos Magic.'
  },
  {
    name: TALENTS.COMBAT_AWARE,
    max: 'Initiative Bonus',
    test: 'Perception during melee',
    description: 'You are used to scanning the battlefield to make snap decisions informed by the shifting tides of war. You may take a Challenging (+0) Perception Test to ignore Surprise, which is modified by circumstance as normal.'
  },
  {
    name: TALENTS.COMBAT_MASTER,
    max: 'Agility Bonus',
    test: '',
    description: 'Your accumulated years of combat experience allow you to keep lesser fighters at bay. For each level in this Talent, you count as one more person for the purposes of determining if one side out-numbers the other. This Talent only comes into play when you are out-numbered. See page 162 for the rules for out-numbering.'
  },
  {
    name: TALENTS.COMBAT_REFLEXES,
    max: 'Initiative Bonus',
    test: '',
    description: 'You react like a flash of lightning. Add 10 to your Initiative for each level in this Talent when determining Combat Initiative.'
  },
  {
    name: TALENTS.COMMANDING_PRESENCE,
    max: 'Fellowship Bonus',
    test: 'Leadership',
    description: 'Your presence fills others with hushed awe and admiration. Such is your aura of authority, those with a lower Status may not resist your Leadership tests with their Willpower. Of course, enemies are still no more likely to respect or obey you, but the common folk rarely stand against you.'
  },
  {
    name: TALENTS.CONCOCT,
    max: 'Intelligence Bonus',
    test: 'Lore (Apothecary)',
    description: 'You are skilled at making potions, philtres, and draughts on the go. You may take one free Crafting Endeavour to use Trade (Apothecary) without need of a Workshop. Other Crafting Endeavours use the normal rules.'
  },
  {
    name: TALENTS.CONTORTIONIST,
    max: 'Agility Bonus',
    test: 'Perform and Agility Tests when contorting helps',
    description: 'You can bend and manipulate your body in a myriad of seemingly unnatural ways. This allows you to squeeze through unlikely gaps and bend your body in crazy ways, giving benefits determined by the GM, possibly with a successful Agility test.'
  },
  {
    name: TALENTS.COOLHEADED,
    max: '1',
    test: '',
    description: 'You gain a permanent +5 bonus to your starting Willpower Characteristic this does not count towards your Advances.'
  },
  {
    name: TALENTS.CRACK_THE_WHIP,
    max: 'Dexterity Bonus',
    test: 'Drive or Ride Tests when Fleeing or Running',
    description: 'You know how to get the most out of your animals. When an animal you control is Fleeing or Running, it gains +1 Movement if you are using a whip.'
  },
  {
    name: TALENTS.CRAFTSMAN,
    max: 'Dexterity Bonus',
    test: 'Dexterity Bonus',
    description: 'You have true creative talent. Add the associated Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.'
  },
  {
    name: TALENTS.CRIMINAL,
    max: 'None',
    test: '',
    description: ''
  },
  {
    name: TALENTS.DEADEYE_SHOT,
    max: '1',
    test: '',
    description: 'You always hit an opponent right between the eyes… or wherever else you intended to hit. Instead of reversing the dice to determine which Hit Location is struck with your ranged weapons, you may pick a location.'
  },
  {
    name: TALENTS.DEALMAKER,
    max: 'Fellowship Bonus',
    test: 'Haggle',
    description: 'You are a skilled businessman who knows how to close a deal. When using the Haggle skill, you reduce or increase the price of the products by an extra 10%. Note: The GM may put a lower limit on prices here to show a seller refusing to sell below cost.'
  },
  {
    name: TALENTS.DETECT_ARTIFACT,
    max: 'Initiative Bonus',
    test: 'Intuition tests to detect magical artefacts',
    description: 'You are able to sense when magic lies within an artefact. You may attempt an Intuition Test for any magical artefact touched. If successful, you sense the item is magical; further, each SL also provides a specific special rule the item uses, if it has any. Normally, you may only attempt this Test once per artefact touched.'
  },
  {
    name: TALENTS.DICEMAN,
    max: 'Intelligence Bonus',
    test: 'Gamble and Sleight of Hand when playing dice games',
    description: 'You are a dicing master, and all claims you cheat are clearly wrong. When you successfully use Gamble or Sleight of Hand when playing with dice, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 06 could be used for +6 SL. If you play any real-life dice games to represent in-game dice games, always roll extra dice equal to your Diceman level and choose the best results.'
  },
  {
    name: TALENTS.DIRTY_FIGHTING,
    max: 'Weapon Skill Bonus',
    test: 'Melee (Brawling)',
    description: 'You have been taught all the dirty tricks of unarmed combat. You may choose to cause an extra +1 Damage for each level in Dirty Fighting with any successful Melee (Brawling) hit. Note: using this Talent will be seen as cheating in any formal bout.'
  },
  {
    name: TALENTS.DISARM,
    max: 'Initiative Bonus',
    test: 'Melee Tests concerning this Talent',
    description: 'You are able to disarm an opponent with a careful flick of the wrist or a well-aimed blow to the hand. For your Action, you may attempt an Opposed Melee/Melee test. If you win, your opponent loses a held weapon, which flies 1d10 feet in a random direction (with further effects as determined by the GM). If you win by 2 SL, you can determine how far the weapon is flung instead of rolling randomly; if you win by 4 SL, you can also choose the direction the weapon goes in; if you win by 6 SL or more, you can take your opponent’s weapon if you have a free hand, plucking it from the air with a flourish. This Talent is of no use if your opponent has no weapon, or is a larger Size than you (see page 341).'
  },
  {
    name: TALENTS.DISTRACT,
    max: 'Agility Bonus',
    test: 'Athletics to Distract',
    description: 'You are trained in simple movements to distract or startle your opponent, drawing eyes from your true intent. You may use your Move to perform a Distraction. This is resolved by an Opposed Athletics/Cool Test. If you win, your opponent can gain no Advantage until the end of the next Round.'
  },
  {
    name: TALENTS.DOOMED,
    max: '1',
    test: '',
    description: 'At the age of 10, a Priest of Morr called a Doomsayer took you aside to foretell your death in an incense-laden, coming-of-age ritual called the Dooming. In conjunction with your GM, come up with a suitable Dooming. Should your character die in a fashion that matches your Dooming, your next character gains a bonus of half the total XP your dead character accrued during play.'
  },
  {
    name: TALENTS.DRILLED,
    max: 'Weapon Skill Bonus',
    test: 'Melee Tests when beside an ally with Drilled',
    description: 'You have been trained to fight shoulder-to-shoulder with other soldiers. If an enemy causes you to lose Advantage when standing beside an active ally with the Drilled Talent, you may keep 1 lost Advantage for each time you’ve taken the Drilled Talent.'
  },
  {
    name: TALENTS.DUAL_WIELDER,
    max: 'Agility Bonus',
    test: 'Melee or Ranged when attacking with two weapons',
    description: 'When armed with two weapons, you may attack with both for your Action. Roll to hit with the weapon held in your primary hand. If you hit, determine Damage as normal, but remember to keep your dice roll, as you will use it again. If the first strike hits, once it is resolved, the weapon in your secondary hand can then target an available opponent of your choice using the same dice roll for the first strike, but reversed. So, if you rolled 34 to hit with the first weapon, you use 43 to hit with the second. Remember to modify this second roll by your off-hand penalty (–20 unless you have the Ambidextrous Talent). This second attack is Opposed with a new defending roll, and damage for this second strike is calculated as normal. The only exception to this is if you roll a Critical for your first strike. If this happens, use the roll on the Critical Table to also act as the roll for the second attack. So, if you scored a critical to the head and rolled 56 on the Critical table for a Major Eye Wound, your second attack would then strike out with a to-hit value of 56. If you choose to attack with both weapons, all your defensive rolls until the start of your next Turn suffer a penalty of –10. You do not gain an Advantage when you successfully strike or Wound an opponent when Dual Wielding unless both attacks hit.'
  },
  {
    name: TALENTS.EMBEZZLE,
    max: 'Intelligence Bonus',
    test: 'Intelligence (Embezzling)',
    description: 'You are skilled at skimming money from your employers without being detected. Whenever you secure money when Earning (during play or performing an Income Endeavour), you may attempt an Opposed Intelligence Test with your employer (assuming you have one). If you win, you skim 2d10 + SL brass pennies, 1d10 + SL silver shillings, or 1 + SL gold crowns (depending upon the size of the business in question, as determined by the GM) without being detected. If your employer wins by 6+ SL, you gain the money, but your embezzling is detected; what then happens is left to the GM. Any other result means you have failed to embezzle any money.'
  },
  {
    name: TALENTS.ENCLOSED_FIGHTER,
    max: 'Agility Bonus',
    test: 'Dodge in enclosed environments',
    description: 'You have learned to make the most benefit out of fighting in enclosed spaces. You ignore penalties to Melee caused by confined spaces such as tunnels, the frontline, small fighting pits, and similar, and can use the Dodge Skill, even if it would normally be disallowed due to lack of space.'
  },
  {
    name: TALENTS.ETIQUETTE,
    max: 'Fellowship Bonus',
    test: 'Charm and Gossip (Social Group)',
    description: 'You can blend in socially with the chosen group so long as you are dressed and acting appropriately. Example social groups for this Talent are: Criminals, Cultists, Guilders, Nobles, Scholars, Servants, and Soldiers. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM’s discretion.'
  },
  {
    name: TALENTS.FAST_HANDS,
    max: 'Dexterity Bonus',
    test: 'Sleight of Hand, Melee (Brawling) to touch an opponent',
    description: 'You can move your hands with surprising dexterity. Bystanders get no passive Perception Tests to spot your use of the Sleight of Hand Skill, instead they only get to Oppose your Sleight of Hand Tests if they actively suspect and are looking for your movements. Further, attempts to use Melee (Brawling) to simply touch an opponent gain a bonus of +10 × your level in Fast Hands.'
  },
  {
    name: TALENTS.FAST_SHOT,
    max: 'Agility Bonus',
    test: 'Ranged when making a Fast Shot',
    description: 'If you have a loaded ranged weapon, you can fire it outside the normal Initiative Order before any other combatant reacts in the following Round. You roll to hit using all the normal modifiers. Employing Fast Shot requires both your Action and Move for your upcoming turn, and these will count as having been spent when your next turn arrives. If two or more characters use Fast Shot, the character who has taken this Talent most goes first. If any characters have taken Fast Shot an equal number of times, both shots are fired simultaneously, and should both be handled at the same time.'
  },
  {
    name: TALENTS.FEARLESS,
    max: 'Willpower Bonus',
    test: 'Cool to oppose your Enemy’s Intimidate, Fear, and Terror',
    description: 'You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered. Typical enemies include Beastmen, Greenskins, Outlaws, Vampires, Watchmen, and Witches.'
  },
  {
    name: TALENTS.FEINT,
    max: 'Weapon Skill Bonus',
    test: 'Melee (Fencing) for Feints',
    description: 'You have trained how to make false attacks in close combat to fool your opponent. You may now make a Feint for your Action against any opponent using a weapon. This is resolved with an Opposed Melee (Fencing)/Melee Test. If you win, and you attack the same opponent before the end of the next Round, you may add the SL of your Feint to your attack roll.'
  },
  {
    name: TALENTS.FIELD_DRESSING,
    max: 'Intelligence Bonus',
    test: 'Heal during combat Rounds',
    description: 'You are used to treating wounds quickly. If you fail a Heal Test when using Bandages, you may reverse the result if this will score a success; however, if you do so, you may not score more than +1 SL as you focus on speed over accuracy.'
  },
  {
    name: TALENTS.FISHERMAN,
    max: 'Initiative Bonus',
    test: 'Any Test involving fishing',
    description: 'You are a very capable fisherman and know all the best ways to land fish. Assuming a large enough body of water is available, you are automatically assumed to be able to fish enough to feed yourself and a number of others equal to your level in Fisherman, assuming you choose to spend at least an hour or so with a line and bait. You may secure more fish in addition to this using the normal rules for foraging (see page 127).'
  },
  {
    name: TALENTS.FLAGELLANT,
    max: 'Toughness Bonus',
    test: 'Any for resisting the Ruinous Powers',
    description: 'You have dedicated your pain to the service of your God. Each day, you must spend half a bell (half an hour) praying as you maintain a number of Wounds suffered equal to your level in Flagellent. Until you next sleep, if you have the Frenzy Talent you may enter Frenzy immediately without testing. The Frenzy Talent is added to the Talent list of any career you are in. Should you fail to flagellate yourself on any given day, or allow your castigated flesh to be healed, you may not spend any Resilience or Resolve until you flagellate yourself again.'
  },
  {
    name: TALENTS.FLEE,
    max: 'Agility Bonus',
    test: 'Athletics when Fleeing',
    description: 'When your life is on the line you are capable of impressive bursts of speed. Your Movement Attribute counts as 1 higher when Fleeing (see page 165).'
  },
  {
    name: TALENTS.FLEET_FOOTED,
    max: '1',
    test: '',
    description: 'You gain +1 to your Movement Attribute.'
  },
  {
    name: TALENTS.FRENZY,
    max: '1',
    test: '',
    description: 'You can Frenzy as described on page 190.'
  },
  {
    name: TALENTS.FRIGHTENING,
    max: 'Strength Bonus',
    test: '',
    description: 'Anyone sane thinks twice before approaching you. If you wish, you have a Fear Rating of 1 (see page 190). Add +1 to this number per extra time you have this Talent.'
  },
  {
    name: TALENTS.FURIOUS_ASSAULT,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.GREGARIOUS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.GUNNER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.HARDY,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.HATRED,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.HOLY_HATRED,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.HOLY_VISIONS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.HUNTERS_EYE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.IMPASSIONED_ZEAL,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.IMPLACABLE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.IN_FIGHTER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.INSPIRING,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.INSTINCTIVE_DICTION,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.INVOKE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.IRON_JAW,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.IRON_WILL,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.JUMP_UP,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.KINGPIN,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.LIGHTNING_REFLEXES,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.LINGUISTICS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.LIP_READING,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.LUCK,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MAGICAL_SENSE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MAGIC_RESISTANCE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MAGNUS_OPUS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MARKSMAN,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MASTER_OF_DISGUISE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MASTER_ORATOR,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MASTER_TRADESMAN,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MENACING,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.MIMIC,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.NIGHT_VISION,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.NIMBLE_FINGERED,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.NOBLE_BLOOD,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.NOSE_FOR_TROUBLE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.NUMISMATICS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.OLD_SALT,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.ORIENTATION,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PANHANDLE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PERFECT_PITCH,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PETTY_MAGIC,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PHARMACIST,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PILOT,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PUBLIC_SPEAKER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.PURE_SOUL,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RAPID_RELOAD,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.REACTION_STRIKE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.READ_WRITE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RELENTLESS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RESISTANCE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RESOLUTE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.REVERSAL,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RIPOSTE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.RIVER_GUIDE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.ROBUST,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.ROUGHRIDER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.ROVER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SAVANT,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SAVVY,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SCALE_SHEER_SURFACE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SCHEMER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SEA_LEGS,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SEASONED_TRAVELLER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SECOND_SIGHT,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SECRET_IDENTITY,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SHADOW,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SHARP,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SHARPSHOOTER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SHIELDSMAN,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SIXTH_SENSE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SLAYER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SMALL,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SNIPER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SPEEDREADER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.SPRINTER,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.STEP_ASIDE,
    max: '',
    test: '',
    description: ''
  },
  {
    name: TALENTS.STONE_SOUP,
    max: 'Toughness Bonus',
    test: 'Endurance Tests to resist hunger',
    description: 'You are used to getting by with less, and know how to survive lean times. You can subsist on half the amount of food required without any negative penalties (bar feeling really hungry), and need only test for Starvation every 3 days, not 2 (see page 181).'
  },
  {
    name: TALENTS.STOUT_HEARTED,
    max: 'Willpower Bonus',
    test: 'Cool Tests to remove Broken Conditions',
    description: 'No matter how bad things get, you always seem to come back for more. You may attempt a Cool Test to remove a Broken Condition at the end of each of your Turns as well as at the end of the Round (see page 168 for more on this).'
  },
  {
    name: TALENTS.STRIDER,
    max: 'Agility Bonus',
    test: 'Athletics Tests to traverse the Terrain',
    description: 'You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain. Typical specialities include: Coastal, Deserts, Marshes, Rocky, Tundra, Woodlands.'
  },
  {
    name: TALENTS.STRIKE_MIGHTY_BLOW,
    max: 'Strength Bonus',
    test: '',
    description: 'You know how to hit hard! You deal your level of Strike Mighty Blow in extra Damage with melee weapons.'
  },
  {
    name: TALENTS.STRIKE_TO_INJURE,
    max: 'Initiative Bonus',
    test: '',
    description: 'You are an expert at striking your enemies most vulnerable areas. You inflict your level of Strike to Injure in additional Wounds when you cause a Critical Wound.'
  },
  {
    name: TALENTS.STRIKE_TO_STUN,
    max: 'Weapon Skill Bonus',
    test: 'Melee Tests when Striking to Stun',
    description: 'You know where to hit an opponent to bring him down fast. You ignore the ‘Called Shot’ penalty to strike the Head Hit Location when using a melee weapon with the Pummel Quality (see page 298). Further, you count all improvised weapons as having the Pummel Quality.'
  },
  {
    name: TALENTS.STRONG_BACK,
    max: 'Strength Bonus',
    test: 'Row and Swim',
    description: 'You have a strong back that is used to hard work. You may add your levels in Strong Back to your SL in any Opposed Strength Tests, and can carry additional Encumbrance points of trappings (see page 293) equal to your level of Strong Back.'
  },
  {
    name: TALENTS.STRONG_LEGS,
    max: 'Strength Bonus',
    test: '',
    description: 'You have strong legs able to carry you great distances when you jump. Add your Strong Legs level to your SL in any Athletics Tests involving Leaping (see page 166).'
  },
  {
    name: TALENTS.STRONG_MINDED,
    max: 'Willpower Bonus',
    test: '',
    description: 'You are the epitome of determination and resolve. Add your level in Strong Minded to your maximum Resolve pool.'
  },
  {
    name: TALENTS.STRONG_SWIMMER,
    max: 'Strength Bonus',
    test: 'Swim',
    description: 'You are an especially strong swimmer and used to holding your breath for a long time underwater. Gain a bonus of your level in Strong Swimmer to your Toughness Bonus for the purposes of holding your breath.'
  },
  {
    name: TALENTS.STURDY,
    max: 'Strength Bonus',
    test: 'Strength Tests when lifting',
    description: 'You have a brawny physique, or are very used to carrying things. Increase the number of Encumbrance Points you can carry by your Sturdy level x 2.'
  },
  {
    name: TALENTS.SUAVE,
    max: '1',
    test: '',
    description: 'You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.'
  },
  {
    name: TALENTS.SUPER_NUMERATE,
    max: 'Intelligence Bonus',
    test: 'Evaluate, Gamble',
    description: 'You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.'
  },
  {
    name: TALENTS.SUPPORTIVE,
    max: 'Fellowship Bonus',
    test: 'Social Tests to influence a superior',
    description: 'You know what to say and when to make the most impact upon your superiors. When you successfully use a social Skill to influence those with a higher Status tier, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 46 could be used for +6 SL.'
  },
  {
    name: TALENTS.SURE_SHOT,
    max: 'Initiative Bonus',
    test: '',
    description: 'You know how to find the weak spots in a target’s armour. When you hit a target with a Ranged weapon, you may ignore Armour Points equal to your Sure Shot level.'
  },
  {
    name: TALENTS.SURGERY,
    max: 'Intelligence Bonus',
    test: 'Heal Tests outside combat rounds; i.e. when you have time to do it ‘properly’',
    description: 'You are a surgeon, able to open and close the flesh in order to heal others. You can treat any Critical Wound marked as needing Surgery. You can also perform surgery to resolve internal issues with an Extended Challenging (+0) Heal Test with a target SL determined by the GM (usually 5–10) depending upon the difficulty of the procedure at hand. This will cause 1d10 Wounds and 1 Bleeding Condition per Test, meaning surgery has a high chance of killing a patient if the surgeon is not careful. After surgery, the patient must pass an Average (+20) Endurance Test or gain a Minor Infection (see page 187).'
  },
  {
    name: TALENTS.TENACIOUS,
    max: 'Toughness Bonus',
    test: 'Endurance Tests for enduring hardships',
    description: 'You never give up, no matter how impossible your travails appear. You can double the length of time successful Endurance Tests allow you to endure a hardship. This includes enduring prolonged riding, exposure, rituals, and similar adversities.'
  },
  {
    name: TALENTS.TINKER,
    max: 'Dexterity Bonus',
    test: 'Trade Tests to repair broken items',
    description: 'You are somewhat of a Johann-of-all-trades, able to repair almost anything. You count all non-magical Trade Skills as Basic when repairing broken items.'
  },
  {
    name: TALENTS.TOWER_OF_MEMORIES,
    max: 'Intelligence Bonus',
    test: '',
    description: 'A recollection technique first instigated by the Cult of Verena, reputedly from Elven practices taught by the Loremasters of Hoeth, Tower of Memories allows you to perfectly recall a sequence of facts by storing them in an imaginary spire. You can recall a sequence as long as your Intelligence without having to make a Test. For every 10 more items you attempt to memorise, you must make an increasingly difficult Intelligence Test to recall the list correctly, starting at Very Easy (+60) for +10, Easy (+40) for +20, Average (+0) for +30, and so on. Beyond it’s obvious utility for Gamble Tests, where having this Talent adds a bonus of +20 to +60 depending upon how useful recalling sequences is to the game at hand, the GM can apply bonuses to other Tests as appropriate. Each time you take this Talent you may recall an extra sequence without having to forget a previously stored one.'
  },
  {
    name: TALENTS.TRAPPER,
    max: 'Initiative Bonus',
    test: 'Perception Tests to spot traps, Set Trap',
    description: 'You are skilled at spotting and using traps. You may take a Perception Test to spot traps automatically without having to tell the GM of your intention; the GM may prefer to make some of these Tests on your behalf in private.'
  },
  {
    name: TALENTS.TRICK_RIDING,
    max: 'Agility Bonus',
    test: 'Dodge Tests on Horseback, Ride (Horse)',
    description: 'You are capable of amazing feats of agility on horseback. You can use any of your Performer Skills and unmodified Dodge skill when on horseback. Further, when mounted, you can make your Move at the start of the Round instead of on your Turn.'
  },
  {
    name: TALENTS.TUNNEL_RAT,
    max: 'Agility Bonus',
    test: 'Stealth Tests when underground',
    description: 'You are at home in tunnels, sewers, and other underground environments. When using Stealth in an underground environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden others.'
  },
  {
    name: TALENTS.UNSHAKABLE,
    max: 'Willpower Bonus',
    test: 'Cool Tests to resist Blackpowder panic',
    description: 'You are a jaded veteran who has survived more than one hail of shots from Blackpowder weapons. You need only take a Cool Test to resist a Broken Condition if you are successfully wounded by a Blackpowder weapon, not just if you are shot at.'
  },
  {
    name: TALENTS.VERY_RESILIENT,
    max: '1',
    test: '',
    description: 'You gain a permanent +5 bonus to your starting Toughness Characteristic (this does not count towards your Advances).'
  },
  {
    name: TALENTS.VERY_STRONG,
    max: '1',
    test: '',
    description: 'You gain a permanent +5 bonus to your starting Strength Characteristic (this does not count towards your Advances).'
  },
  {
    name: TALENTS.WAR_LEADER,
    max: 'Fellowship Bonus',
    test: 'Leadership Tests during War',
    description: 'Your stern gaze and inspiring words motivate your soldiers to fight on to the end. All subordinates able to see you may add your level in War Leader to their SL in one Willpower Test per Round. This bonus does not stack.'
  },
  {
    name: TALENTS.WAR_WIZARD,
    max: '1',
    test: '',
    description: 'You are trained to cast magic while in the thick of combat. On your Turn, you may cast one Spell with a Casting Number of 5 or less for free without using your Action. However, if you do this, you may not cast another spell this Turn.'
  },
  {
    name: TALENTS.WARRIOR_BORN,
    max: '1',
    test: '',
    description: 'You gain a permanent +5 bonus to your starting Weapon Skill Characteristic (doesn’t count as Advances).'
  },
  {
    name: TALENTS.WATERMAN,
    max: 'Agility Bonus',
    test: 'Sail Tests for river-going vessels',
    description: 'You are an experienced freshwater sailor and are well-versed with river vessels. You can ignore all negatives to your Tests when onboard a barge derived from rolling waters, swaying vessels, unsure footing, and similar. Further, you count as two boatmen towards the minimum number of crew to pilot a river vessel.'
  },
  {
    name: TALENTS.WEALTHY,
    max: 'None',
    test: '',
    description: 'You are fabulously wealthy, and are rarely ever short of coin. When Earning (including Income Endeavours) you secure +1 GC per time you have this Talent.'
  },
  {
    name: TALENTS.WELL_PREPAIRED,
    max: 'Initiative Bonus',
    test: '',
    description: 'You are used to anticipating the needs of others, and yourself. A number of times per session equal to your level of Well-Prepared, you may pull the trapping required for the current situation from your backpack (or similar) as long as it is Encumbrance 0, could feasibly been bought recently, and doesn’t stretch credibility too far. This could be anything from a flask of spirits to fortify a wounded comrade to a pfennig-whistle needed by a passing entertainer. Whenever you do this, you must deduct the cost for the prepared item from your purse, representing the coin you spent earlier.'
  },
  {
    name: TALENTS.WITCH,
    max: 'Willpower Bonus',
    test: '',
    description: 'You are a self-taught spellcaster who has figured out how to cast magic through trial and error. Add Language (Magick) to any Career you enter; if it is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance. Further, for the cost of a Resilience point, you may manifest (and permanently memorise) a spell from any Arcane Lore. You can do this a number of times equal to your level in this Talent.'
  }
];
