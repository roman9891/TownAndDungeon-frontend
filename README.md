# Town&Dungeon

Lead you heroes through the perils of the dungeon. Town&Dungeon is a turn based strategy game. Outfit your heroes with an assortment of skills that allow for different styles and strategies, then enter the dungeon and proceed up the floors to fight increasingly challenging foes.

# Installation

Ensure you have Ruby and Rails installed before hand

Fork and clone the [backend repo](https://github.com/roman9891/TownAndDungeon-backend)

```
npm install
```

# Instructions
## Creating an Account

Enter a username and password and click Create Account

## Town

From the town menu, you can see your hero party and the skills they currently have equipped. At the start of a new game, each hero only has 4 basic skills equipped. As you progress through the dungeon you will unlock additional skills for each hero. Clicking a hero will display all available skills at the bottom of the screen in the skill info panel. Clicking a skill in the info panel will pull up details about the skill. You can change which four skills a hero has equipped by clicking a skill name underneath the hero's image, then clicking a different skill from the bottom of the screen. Once you feel comfortable with your heroes' skills you can proceed to the dungeon by clicking the dungeon button in the top right corner.

## Dungeon

From the dungeon menu, you can see all floors available. Emerging victorious from a floor will unlock the next floor. Clicking the floor button will display the enemies and a tip. Clicking 'To Battle!' to start combat.

## Battle

Use your heroes' skills to defeat your foes. Once all enemies HP has been reduced to 0 you win. Each hero can only use one skill per round and only if they have enough NRG. Skills that require too much NRG appear greyed out. At the end of each turn, both your heroes and the enemies with gain NRG. If an enemy survives long enough to gain full NRG they may use a special attack that can be devestating.

# Strategy

## Warrior

Warrior has skills that let it either focus on dealing physcial damage or absorb damage for the team. Skills like Beserk Stance and Embolden can raise the warrior's P.Atk and skills like Power Strike and Cyclone let him deal heavy damage. On the other hand, skills like Provoke or Selfless make the warrior more likely to be targeted. This can be used in conjunction with skills like Block, Guard Stance, and Embolden to bolster his defense. He can also remove and enemy's stance using Stunning Strike.

## Wizard

The wizard can focus on dealing heavy magic damage, and it can also provide support to the party with its other skills. Fireball, Ice Spear, and Lightning Storm each deal heavy damage but target differently, so you have to assess the floor's enemy composition to determine which skill will deal the most damage. The wizard can help any party member gain energy using charge. It can also make allies difficult to target using invisibility. It can use Enervate to boost it's own M.Atk but it can also be used to help a warrior provoke magic attacks.

## Rogue

The rogue has skills that let him or hide or make other party members more likely to get targeted by enemies. He can also apply the poison condition to enemies to slowly drain them of health. Additionally, he's capable of dealing signicant physical damage, especially in conjunction with hide. 

## Cleric

The cleric can either focus on healing or improving allies stats with buffs. The cleric initially can only heal with first aid but eventually gains a stronger single target heal and a full party heal to choose from. He also gains the ability to buff every stat, although he's better at buffing defense than offense. At later levels, he gains the ability to buff the entire teams physical or magical defense.

# Built With

- React
- Ruby on Rails
- ActiveRecord
- PostgreSQL

# Author
Roman Opalacz
