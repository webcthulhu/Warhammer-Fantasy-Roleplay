export enum QUALITIES {
  ACCURATE = 'accurate',
  BLACKPOWDER = 'blackpowder',
  BLAST = 'blast',
  DAMAGING = 'damaging',
  DEFENSIVE = 'defensive',
  DISTRACT = 'distract',
  ENTANGLE = 'entangle',
  FAST = 'fast',
  HACK = 'hack',
  IMPACT = 'impact',
  IMPALE = 'impale',
  PENETRATING = 'penetrating',
  PISTOL = 'pistol',
  PRECISE = 'precise',
  PUMMEL = 'pummel',
  REPEATER = 'repeater',
  SHIELD = 'shield',
  TRAP_BLADE = 'trap blade',
  UNBREAKABLE = 'unbreakable',
  WRAP = 'wrap',
  DANGEROUS = 'dangerous',
  IMPRECISE = 'imprecise',
  RELOAD = 'reload',
  SLOW = 'slow',
  TIRING = 'tiring',
  UNDAMAGING = 'undamaging',
  FLEXIBLE = 'flexible',
  IMPENETRABLE = 'impenetrable',
  PARTIAL = 'partial',
  WEAKPOINTS = 'weakpoints'
}

export interface IQuality {
  name: string;
  rating?: boolean;
  description: string;
}

export const Qualities = [
  {
    name: QUALITIES.ACCURATE,
    description: 'The weapon is accurate and easy to hit with. Gain a bonus of +10 to any Test when firing this weapon.'
  },
  {
    name: QUALITIES.BLACKPOWDER,
    description: 'The crack of gunfire followed by gouts of smoke and confusion can be terrifying. If you are targeted by a Blackpowder weapon, you must pass an Average (+20) Cool Test or take a Broken Condition, even if the shot misses.'
  },
  {
    name: QUALITIES.BLAST,
    rating: true,
    description: 'All Characters within (Rating) yards of the struck target point take SL+Weapon Damage, and suffer any Conditions the weapon inflicts.'
  },
  {
    name: QUALITIES.DAMAGING,
    description: 'A Damaging weapon can use the higher score from either the units die or the SL to determine the Damage caused from a successful hit. For example, if you roll 34 in your attack Test and the target number was 52 you can choose to use the SL, which in this case is 2, or the units die result, which is 4. An Undamaging weapon can never also be Damaging (Undamaging takes precedent).'
  },
  {
    name: QUALITIES.DEFENSIVE,
    description: 'Defensive weapons are designed to parry incoming attacks. If you are wielding such a weapon, gain a bonus of +1 SL to any Melee Test when you oppose an incoming attack.'
  },
  {
    name: QUALITIES.DISTRACT,
    description: 'Distracting weapons can be used to drive an opponent back due to their dangerous or whip-like natures. Instead of causing Damage, a successful attack with a Distracting weapon can force an opponent back 1 yard per SL by which you win the Opposed Test.'
  },
  {
    name: QUALITIES.ENTANGLE,
    description: 'Your weapon wraps around your opponents, entangling them. Any opponent successfully hit by your weapon gains the Entangled Condition with a Strength value equal to your Strength Characteristic. When Entangling an opponent, you cannot otherwise use the weapon to hit. You can end the Entangling whenever you wish.'
  },
  {
    name: QUALITIES.FAST,
    description: 'Fast weapons are designed to strike out with such speed that parrying is not an option, leaving an opponent skewered before they can react. A wielder of a Fast weapon can choose to attack with the Fast weapon outside of the normal Initiative sequence, either striking first, last, or somewhere in between as desired. Further, all Melee Tests to defend against Fast weapons suffer a penalty of –10 if your opponent is using a weapon without the Fast Quality; other Skills defend as normal. Two opponents with Fast weapons fight in Initiative order (relative to each other) as normal. A Fast weapon may never also be Slow (Slow takes precedent).'
  },
  {
    name: QUALITIES.HACK,
    description: 'Hacking weapons have heavy blades that can hack through armour with horrific ease. If you hit an opponent, you Damage a struck piece of armour or shield by 1 point as well as wounding the target.'
  },
  {
    name: QUALITIES.IMPACT,
    description: 'Some weapons are just huge or cause terrible damage due to their weight or design. On a successful hit, add the result of the units die of the attack roll to any Damage caused by an Impact weapon. An Undamaging weapon can never also have Impact (Undamaging takes precedent).'
  },
  {
    name: QUALITIES.IMPALE,
    description: 'Impale weapons can kill with a single clean blow. Impale weapons cause a Critical Hit on any number divisible by 10 (i.e.: 10, 20, 30, etc.) as well as on doubles (i.e.: 11, 22, 33) rolled equal or under an appropriate Test in combat. If the impale comes from a ranged weapon, the ammunition used has firmly lodged itself in the target’s body. Arrows and bolts require a successful Challenging (+0) Heal Test to remove — bullets require a surgeon (see the Surgery Talent in Chapter 4: Skills and Talents). You cannot heal 1 of your Wounds for each unremoved arrow or bullet.'
  },
  {
    name: QUALITIES.PENETRATING,
    description: 'The weapon is highly effective at penetrating armour. Non-metal APs are ignored, and the first point of all other armour is ignored.'
  },
  {
    name: QUALITIES.PISTOL,
    description: 'You can use this weapon to attack in Close Combat.'
  },
  {
    name: QUALITIES.PRECISE,
    description: 'The weapon is easy to get on target. Gain a bonus of +1 SL to any successful Test when attacking with this weapon.'
  },
  {
    name: QUALITIES.PUMMEL,
    description: 'Pummel weapons are especially good at battering foes into submission. If you score a Head hit with a Pummel weapon, attempt an Opposed Strength/ Endurance test against the struck opponent. If you win the test, your opponent gains a Stunned Condition.'
  },
  {
    name: QUALITIES.REPEATER,
    rating: true,
    description: 'Your weapon holds (Rating) shots, automatically reloading after each time you fire. When you use all your shots, you must fully reload the weapon using the normal rules.'
  },
  {
    name: QUALITIES.SHIELD,
    rating: true,
    description: 'If you use this weapon to oppose an incoming attack, you count as having (Rating) Armour Points on all locations of your body. If your weapon has a Shield Rating of 2 or higher (so: Shield 2 or Shield 3), you may also Oppose incoming missile shots in your Line of Sight.'
  },
  {
    name: QUALITIES.TRAP_BLADE,
    description: 'Some weapons are designed to trap other weapons, and sometimes even break them. If you score a Critical when defending against an attack from a bladed weapon you can choose to trap it instead of causing a Critical Hit. If you choose to do this, enact an Opposed Strength Test, adding your SL from the previous Melee Test. If you succeed, your opponent drops the blade as it is yanked free. If you score an Astounding Success, you not only disarm your opponent, but the force of your maneuver breaks their blade unless it has the Unbreakable quality. If you fail the Test, your opponent frees the blade and may fight on as normal.'
  },
  {
    name: QUALITIES.UNBREAKABLE,
    description: 'The weapon is exquisitely well-made or constructed from an especially strong material. Under almost all circumstances, this weapon will not break, corrode, or lose its edge.'
  },
  {
    name: QUALITIES.WRAP,
    description: 'Wrap weapons typically have long chains with weights at the end, making it very difficult to parry them effectively. Melee Tests opposing an attack from a Wrap weapon suffer a penalty of –1 SL, as parried strikes wrap over the top of shields, or around blades.'
  },
  {
    name: QUALITIES.DANGEROUS,
    description: 'Some weapons are almost as likely to hurt you as your opponent. Any failed test including an 9 on either 10s or units die results in a Fumble (see Chapter 5: Rules for more on Fumbles).'
  },
  {
    name: QUALITIES.IMPRECISE,
    description: 'Imprecise weapons are difficult to bring to bear as they are unwieldy or hard to aim. Suffer a penalty of –1 SL when using the weapon to attack. An Imprecise Weapon can never be Precise (Imprecise takes precedent).'
  },
  {
    name: QUALITIES.RELOAD,
    rating: true,
    description: 'The weapon is slow to reload. An unloaded weapon with this flaw requires an Extended Ranged Test for the appropriate Weapon Group scoring (Rating) SL to reload. If you are interrupted while reloading, you must start again from scratch.'
  },
  {
    name: QUALITIES.SLOW,
    description: 'Slow weapons are unwieldy and heavy, making them difficult to use properly. Characters using Slow weapons always strike last in a Round, regardless of Initiative order. Further, opponents gain a bonus of +1 SL to any Test to defend against your attacks.'
  },
  {
    name: QUALITIES.TIRING,
    description: 'The weapon is fatiguing to use or difficult to bring to bear. You only gain the benefit of the Impact and Damaging Weapon Traits on a Turn you Charge.'
  },
  {
    name: QUALITIES.UNDAMAGING,
    description: 'Some weapons are not very good at penetrating armour. All APs are doubled against Undamaging weapons. Further, you do not automatically inflict a minimum of 1 Wound on a successful hit in combat.'
  },
  {
    name: QUALITIES.FLEXIBLE,
    description: 'Flexible armour can be worn under a layer of non-Flexible armour if you wish. If you do so, you gain the benefit of both.'
  },
  {
    name: QUALITIES.IMPENETRABLE,
    description: 'The armour is especially resilient, meaning most attacks simply cannot penetrate it. All Critical Wounds caused by an odd number to hit you, such as 11 or 33, are ignored.'
  },
  {
    name: QUALITIES.PARTIAL,
    description: 'The armour does not cover the entire hit location. An opponent that rolls an even number to hit, or rolls a Critical Hit, ignores the partial armour’s APs.'
  },
  {
    name: QUALITIES.WEAKPOINTS,
    description: 'The armour has small weakpoints where a blade can slip in if your opponent is sufficiently skilled or lucky. If your opponent has a weapon with the Impale Quality and scores a Critical, the APs of your armour are ignored.'
  }
];
