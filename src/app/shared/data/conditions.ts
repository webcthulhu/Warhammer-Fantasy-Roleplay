export enum CONDITIONS {
  ABLAZE = 'ablaze',
  BLEEDING = 'bleeding',
  BLINDED = 'blinded',
  BROKEN = 'broken',
  DEAFENED = 'deafened',
  ENTANGLED = 'entangled',
  FATIGUED = 'fatigued',
  POISONED = 'poison',
  PRONE = 'prone',
  STUNNED = 'stunned',
  SURPRISED = 'surprised',
  UNCONSCIOUS = 'unconscious'
}

export interface ICondition {
  name: string;
  description: string;
}

export const Conditions: ICondition[] = [
  {
    name: CONDITIONS.ABLAZE,
    description: 'You are on fire! This Condition is normally only applied if you are flammable — for example: wearing clothes that can be set alight — but some magical and divine effects can set you alight even if you are not normally combustible! At the end of every Round, you suffer 1d10 Wounds, modified by Toughness Bonus and Armour Points, with a minimum of 1 Wound suffered. Each extra Ablaze Condition you have adds +1 to the Damage suffered; so, three Ablaze Conditions result in 1d10+2 Damage suffered. One Ablaze Condition can be removed with a successful Athletics Test, with each SL removing an extra Ablaze Condition. The Difficulty for this Test is modified by circumstances: it’s much easier to put out a fire rolling around on sand than it is in the middle of an oil-soaked kitchen.'
  },
  {
    name: CONDITIONS.BLEEDING,
    description: 'You are bleeding badly. Lose 1 Wound at the end of every Round, ignoring all modifiers. Further, suffer a penalty of –10 to any Tests to resist Festering Wounds, Minor Infection, or Blood Rot (see page 186). If you reach 0 Wounds, you no longer lose Wounds and instead fall immediately unconscious (gain the Unconscious Condition). At the end of Round, you have a 10% chance of dying per Bleeding Condition you have; so, if you had 3 Bleeding Conditions, you would die from blood loss on a roll of 0–30. You cannot regain consciousness until all Bleeding Conditions are removed (see Injury on page 172). A Bleeding Condition can be removed with: a successful Heal Test, with each SL removing an extra Bleeding Condition; or with any spell or prayer that heals Wounds, with one Condition removed per Wound healed. Once all Bleeding Conditions are removed, gain one Fatigued Condition.'
  },
  {
    name: CONDITIONS.BLINDED,
    description: 'Perhaps because of a flash of light, or because of liquid sprayed in your face, you are unable to see properly. You suffer a –10 penalty to all Tests involving sight, and any opponent attacking you in close combat gains a bonus of +10 to hit you. One Blinded Condition is removed at the end of every other Round.'
  },
  {
    name: CONDITIONS.BROKEN,
    description: 'You are terrified, defeated, panicked, or otherwise convinced you are going to die. On your turn, your Move and Action must be used to run away as fast as possible until you are in a good hiding place beyond the sight of any enemy; then you can use your Action on a Skill that allows you to hide more effectively. You also receive a penalty of –10 to all Tests not involving running and hiding. You cannot Test to rally from being Broken if you are Engaged with an enemy (see page 159). If you are unengaged, at the end of each Round, you may attempt a Cool Test to remove a Broken Condition, with each SL removing an extra Broken Condition, and the Difficulty determined by the circumstances you currently find yourself: it is much easier to rally when hiding behind a barrel down an alleyway far from danger (Average +20) than it is when three steps from a slavering Daemon screaming for your blood (Very Hard –30). If you spend a full Round in hiding out of line-of-sight of any enemy, you remove 1 Broken Condition. Once all Broken Conditions are removed, gain 1 Fatigued Condition.'
  },
  {
    name: CONDITIONS.DEAFENED,
    description: 'Whether caused by a loud noise or a blow to the head, you are unable to hear properly. You suffer a –10 penalty to all Tests involving hearing, and any opponent attacking you in close combat from the flank or rear gains an extra bonus of +10 to hit you (this bonus does not increase with multiple Deafened Conditions). One Deafened condition is removed at the end of every other Round and is often replaced with tinnitus.'
  },
  {
    name: CONDITIONS.ENTANGLED,
    description: 'You are wrapped in something restricting your movement; it could be ropes, spider’s webbing, or an opponent’s bulging biceps. On your turn, you may not Move, and all your actions involving movement of any kind suffer a penalty of –10 (including Grappling; see page 163). For your Action, you can remove an Entangled Condition if you win an Opposed Strength Test against the source of the entanglement, with each SL removing an extra Entangled Condition.'
  },
  {
    name: CONDITIONS.FATIGUED,
    description: 'You are exhausted or stressed, and certainly in need of rest. You suffer a –10 penalty to all Tests. Removing a Fatigued Condition normally requires rest, a spell, or a divine effect, though in some instances, such as when a Fatigued Condition is caused by carrying too much (see Encumbrance on page 293), simply changing your circumstances (carrying fewer trappings, for example) can remove a Condition.'
  },
  {
    name: CONDITIONS.POISONED,
    description: 'You have been poisoned or injected with venom. All Tests to remove poison have their difficulty determined by the poison or venom suffered. At the end of each Round, lose 1 Wound, ignoring all modifiers. Also, suffer a penalty of –10 to all Tests. If you reach 0 Wounds when Poisoned , you cannot heal any Wounds until all Poisoned conditions are removed. If you fall Unconscious when Poisoned , make an Endurance Test after a number of Rounds equal to your Toughness Bonus or die horribly. See Injury on page 172 for more on this. At the end of each Round, you may attempt an Endurance Test. If successful, remove a Poisoned Condition, with each SL removing an extra Poisoned Condition. A Heal Test provides the same results. Once all Poisoned Conditions are removed, gain 1 Fatigued Condition.'
  },
  {
    name: CONDITIONS.PRONE,
    description: 'You have fallen to the ground, possibly because you have run out of Wounds, you’ve tripped, or because you’ve been hit by something rather large. On your turn, your Move can only be used to stand up or crawl at half your Movement in yards (note: if you have 0 Wounds remaining, you can only crawl). You suffer a –20 penalty to all Tests involving movement of any kind, and any opponent trying to strike you in Melee Combat gains +20 to hit you. Unlike most other conditions, Prone does not stack — you are either Prone , or you are not. You lose the Prone Condition when you stand up.'
  },
  {
    name: CONDITIONS.STUNNED,
    description: 'You have been struck about the head or otherwise disorientated or confused; your ears are likely ringing, and little makes sense. You are incapable of taking an Action on your turn but are capable of half your normal movement. You can defend yourself in opposed Tests — but not with Language (Magick). You also suffer a –10 penalty to all Tests. If you have any Stunned Conditions, any opponent trying to strike you in Melee Combat gains +1 Advantage before rolling the attack. At the end of each Round, you may attempt a Challenging (+0) Endurance Test. If successful, remove a Stunned Condition, with each SL removing an extra Stunned Condition. Once all Stunned Conditions are removed, gain 1 Fatigued Condition if you don’t already have one.'
  },
  {
    name: CONDITIONS.SURPRISED,
    description: 'You have been caught unawares and you aren’t at all ready for what’s about to hit you. You can take no Action or Move on your turn and cannot defend yourself in opposed Tests. Any opponent trying to strike you in Melee Combat gains a bonus of +20 to hit. The Surprised Condition does not stack, so you do not collect multiple Surprised Conditions, even should you be technically surprised multiple times in a Round. At the end of each Round, or after the first attempt to attack you, you lose the Surprised Condition.'
  },
  {
    name: CONDITIONS.UNCONSCIOUS,
    description: 'You are knocked out, asleep, or otherwise insensible. You can do nothing on your turn and are completely unaware of your surroundings. Any Melee attack targeting you automatically hits on the location of the attacker’s choice with the maximum possible SL it could score, and also inflicts a Critical Wound; or, if the GM prefers, any close combat hit simply kills you. Any ranged combat hit automatically does the same if the shooter is at Point Blank range. The Unconscious Condition does not stack — you are either Unconscious , or you are not — so you do not collect multiple Unconscious Conditions. Recovering from unconsciousness requires different circumstances depending upon why you fell unconscious. Refer to Injury on page 172 for more on this. If you spend a Resolve point to remove an Unconscious condition, but have not resolved the cause of the incapacitation, you gain another Unconscious Condition at the end of the round. When you lose the Unconscious Condition, you gain the Prone and Fatigued Conditions.'
  }
];
