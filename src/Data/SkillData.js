const skills = {
    warrior: [
        {
            id: 1000,
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 10,
            info: `Regular attack`,
            progress: 0
        },
        {
            id: 1001,
            name: 'Block',
            cost: 0,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if ((user.hp + 10) > user.mhp) {
                    user.hp = user.mhp
                } else {
                    user.hp = user.hp + 10
                } 
            },
            power: 0,
            info: `Restore slight HP by keep your guard up`,
            progress: 5
        },
        {
            id: 1002,
            name: `Guard Stance`,
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`pDef`, 1.5], [`pAtk`, (1/1.5)]],
            power: 0,
            info: `Raises the users PDEF but lowers PATK.`,
            progress: 0
        },
        {
            id: 1003,
            name: `Beserk Stance`,
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`pAtk`, 1.5],[`pDef`, (1/1.5)]],
            power: 0,
            info: `Raises the users PATK at the cost of PDEF`,
            progress: 5
        },
        {
            id: 1004,
            name: `Embolden`,
            type: 'B',
            cost: 70,
            target: 'single ally',
            beforeEffect: [[`pDef`, 1.5],[`pAtk`, 1.5]],
            power: 0,
            info: `Raises the users attack and defense by 50%`,
            progress: 10,
        },
        {
            id: 1005,
            name: `Power Attack`,
            cost: 30,
            target: `single enemy`,
            type: 'P',
            power: 40,
            info: `Deals significant damage`,
            progress: 0
        },
        {
            id: 1006,
            name: `Cyclone`,
            cost: 50,
            target: 'all enemy',
            type: 'P',
            power: 20,
            info: `A wide attack against all enemies`,
            progress: 5
        },
        // {
        //     id: 1007,
        //     name: 'Aura Strike',
        //     cost: 30,
        //     target: 'single enemy',
        //     type: 'D',
        //     damage: (user, target) => {
        //         if (user.buff) return 30 * user.pAtk / target.mDef
        //         else return 20 * user.pAtk / target.pDef
        //     },
        //     info: 'An attack that resonates with auras. Does extra damage if buffed.',
        //     progress: 10,
        // },
        {
            id: 1007,
            name: 'Noble Strike',
            cost: 20,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                if (user.provoke) return 30 * user.pAtk / target.pDef
                else return 20 * user.pAtk / target.pDef
            },
            info: 'An attack that resonates with auras. Does extra damage if buffed.',
            progress: 10,
        },
        {
            id: 1008,
            name: 'Stun Strike',
            cost: 50,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                if (target.stance) {
                    target.stance[0].forEach(effect => {
                        target[effect[0]] = target[effect[0]] / effect[1]
                    })
                    target.stance = null
                    return 40 * user.pAtk / target.pDef
                }
                else {return 30 * user.pAtk / target.pDef}
            },
            info: 'Forceful blow that removes the targets stance',
            progress: 5
        },
        {
            id: 1009,
            name: 'Provoke',
            cost: 10,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if (user.hide) {user.hide = false}
                user.provoke = true
            },
            power: 0,
            info: 'Draws enemy attacks',
            progress: 0
        },
        {
            id: 1010,
            name: 'Selfless',
            cost: 50,
            target: 'all allies',
            type: 'E',
            effect: (user, target) => {
                user.provoke = 50
                if (target !== user) {
                    target.hide = 50
                }
            },
            info: `Position yourself in front of all allies to redirect attacks to yourself. Puts user in provoke status and hides all allies.`,
            progress: 10,
        },
        {
            id: 1011,
            name: 'Frenzy',
            cost: 70,
            target: 'random enemy',
            hits: 5,
            type: 'D',
            damage: (user, target) => {
                return 20 * (1 + (1 - (user.hp/user.mhp)))
            },
            info: 'An attack that resonates with auras. Does extra damage if buffed.',
            progress: 10,
        },
    ],
    wizard: [
        {
            id: 2000,
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 10,
            info: `Regular attack`,
            progress: 0
        },
        {
            id: 2001,
            name: 'Charge',
            cost: 0,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                if ((target['starting-energy'] + 10) > target['max-energy']) {
                    target['starting-energy'] = target['max-energy']
                } else {
                    target['starting-energy'] = target['starting-energy'] + 10
                }  
            },
            power: 0,
            info: 'Gather mana to restore energy',
            progress: 0
        },
        {
            id: 2002,
            name: 'Magic Missle',
            cost: 20,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {return 30 * user.mAtk / target.mDef},
            info: 'Strong magical attack',
            progress: 0
        },
        {
            id: 2003,
            name: 'Fireball',
            cost: 50,
            target: 'all enemy',
            type: 'D',
            damage: (user, target) => {return 30 * user.mAtk / target.mDef},
            info: "Burn's all targets",
            progress: 5
        },
        {
            id: 2004,
            name: 'Trance',
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1/1.5)]],
            info: 'Raises MATK and lowers MDEF',
            progress: 10,
        },
        {
            id: 2005,
            name: 'Enervate',
            cost: 70,
            target: 'single ally',
            type: 'B',
            beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1.5)]],
            info: `Raises an ally's MATK and MDEF`,
            progress: 0
        },
        {
            id: 2006,
            name: 'Invisibility',
            cost: 50,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                user.hide = 50
                if (target !== user) {
                    target.provoke = 50
                }
            },
            info: `Makes the target nearly impossible to see. Sets target to hide and all other allies to provoke.`,
            progress: 10,
        },
        {
            id: 2007,
            name: 'Shatter',
            cost: 50,
            target: 'single enemy',
            type: 'E',
            effect: (user, target) => {
                if (target.buff) {
                    target.buff[0].forEach(effect => {
                        target[effect[0]] = target[effect[0]] / effect[1]
                    })
                    target.buff = null
                }
            },
            info: `Remove an enemy's buff`,
            progress: 5
        },
        {
            id: 2008,
            name: 'Ice Spear',
            cost: 50,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {return 70 * user.mAtk / target.pDef},
            info: "Launches a spear of ice that hits the targets physical defense",
            progress: 5
        },
        {
            id: 2009,
            name: 'Lightning Storm',
            cost: 50,
            target: 'random enemy',
            hits: 3,
            type: 'D',
            damage: (user, target) => {return 30 * user.mAtk / target.mDef},
            info: "Lightning bolts randomly strike targets 3 times",
            progress: 10,
        },
        {
            id: 2010,
            name: 'Sage Stance',
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`mAtk`, (1/1.5)],[`mDef`, 1.5]],
            info: 'Raises MDEF and lowers MATK',
            progress: 5
        },
    ],
    rogue: [
        {
            id: 3000,
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 10,
            info: `Regular attack`,
            progress: 0
        },
        {
            id: 3001,
            name: 'Hide',
            cost: 0,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if (target.provoke) {target.provoke = false}
                target.hide = true
            },
            info: `Decreases the chance of being targeted`,
            progress: 0
        },
        {
            id: 3002,
            name: 'Misdirect',
            cost: 50,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                if (target.hide) {target.hide = 0}
                target.provoke = true
            },
            info: `Direct the enemies attention to an ally`,
            progress: 5
        },
        {
            id: 3003,
            name: 'Stinger',
            cost: 30,
            target: 'single enemy',
            type: 'E',
            effect: (user, target) => {
                target.condition = {
                    name: 'Poison',
                    effect: (victim) => {
                        victim.hp = victim.hp - 10
                    },
                    duration: 99,
                }
            },
            info: `Poison an enemy`,
            progress: 0
        },
        {
            id: 3004,
            name: `Backstab`,
            cost: 50,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                if (user.hide) {
                    user.hide = 0
                    return 70 * user.pAtk / target.pDef
                } else {
                    return 50 * user.pAtk / target.pDef
                }
            },
            info: `Devestate your opponent from the shadows. If hidden, this attack does extra damage but removes hide status.`,
            progress: 0
        },
        {
            id: 3005,
            name: 'Stalk',
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`Atk`, 1.4],[`def`, (1/1.2)],[`mDef`, (1/1.2)]],
            info: 'Raises ATK but lowers DEF and MDEF',
            progress: 10,
        },
        {
            id: 3006,
            name: `Poison Darts`,
            cost: 70,
            target: 'random enemy',
            hits: 4,
            type: 'D',
            damage: (user, target) => {
                target.condition = {
                    name: 'Poison',
                    effect: (victim) => {
                        victim.hp = victim.hp - 10
                    },
                    duration: 99,
                }
                return 20 * user.pAtk / target.pDef
            },
            info: `Shower the battlefield with 4 poison darts that hit enemies randomly`,
            progress: 10,
        },
        {
            id: 3007,
            name: `Antidote`,
            cost: 10,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                target.condition = 0
            },
            info: `Cure an ally's condition`,
            progress: 10,
        },
        {
            id: 3008,
            name: `Steal`,
            cost: 50,
            target: 'single enemy',
            type: 'E',
            effect: (user, target) => {
                if (target.nrg - 20 < 0) {target.nrg = 0}
                else {target.nrg = target.nrg - 20}
            },
            info: `Steals from an enemy, lowering its energy`,
            progress: 5
        },
        {
            id: 3009,
            name: `Heist`,
            cost: 100,
            target: 'all enemy',
            type: 'E',
            effect: (user, target) => {
                if (target.nrg - 20 < 0) {target.nrg = 0}
                else {target.nrg = target.nrg - 20}
            },
            info: `Steals from all enemies, lowering their energy`,
            progress: 10,
        },
        {
            id: 3011,
            name: `Assassinate`,
            cost: 40,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                const damage = 40 * user.pAtk / user.pDef
                if (target.hp - damage <= 0) {
                    (user['starting-energy'] + 20 > user['max-energy']) ? (user['starting-energy'] = user['max-energy']) : (user['starting-energy'] = user['starting-energy'] + 20)
                    return damage
                }
                else {
                    return damage
                }
            },
            info: `Attempt to kill the target with with significant damage. If you fulfill the contract, regain some energy.`,
            progress: 5
        },
        {
            id: 3012,
            name: 'Evasion',
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`Atk`, 1/1.5],[`def`, (1.25)],[`mDef`, (1.25)]],
            info: 'Focus on agility to raise DEF and MDEF but lower ATK',
            progress: 5
        },
    ],
    cleric: [
        {
            id: 4000,
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 10,
            info: `Regular attack`,
            progress: 0
        },
        {
            id: 4001,
            name: 'First Aid',
            cost: 0,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                if ((target.hp + 10) > target.mhp) {
                    target.hp = target.mhp
                } else {
                    target.hp = target.hp + 10
                }  
            },
            power: 0,
            info: 'Restore slight hp to a target.',
            progress: 0
        },
        {
            id: 4002,
            name: `Bravery`,
            type: 'B',
            cost: 50,
            target: 'single ally',
            beforeEffect: [[`pAtk`, 1.3]],
            power: 0,
            info: `Raises the targets ATK by 30%`,
            progress: 5
        },
        {
            id: 4003,
            name: `Faith`,
            type: 'B',
            cost: 50,
            target: 'single ally',
            beforeEffect: [[`mAtk`, 1.3]],
            power: 0,
            info: `Raises the targets MATK by 30%`,
            progress: 5
        },
        {
            id: 4004,
            name: `Honor`,
            type: 'B',
            cost: 50,
            target: 'single ally',
            beforeEffect: [[`pDef`, 1.5]],
            power: 0,
            info: `Raises the targets PDEF by 50%`,
            progress: 0
        },
        {
            id: 4005,
            name: `Devotion`,
            type: 'B',
            cost: 50,
            target: 'single ally',
            beforeEffect: [[`mDef`, 1.5]],
            power: 0,
            info: `Raises the targets MDEF by 50%`,
            progress: 0
        },
        {
            id: 4006,
            name: 'Heal',
            cost: 50,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                if ((target.hp + 40) > target.mhp) {
                    target.hp = target.mhp
                } else {
                    target.hp = target.hp + 40
                }  
            },
            power: 0,
            info: 'Restores a significant amount of hp to the target.',
            progress: 5
        },
        {
            id: 4007,
            name: 'Heal-all',
            cost: 70,
            target: 'all allies',
            type: 'E',
            effect: (user, target) => {
                if ((target.hp + 20) > target.mhp) {
                    target.hp = target.mhp
                } else {
                    target.hp = target.hp + 20
                }  
            },
            power: 0,
            info: 'Restores hp to all allies',
            progress: 10,
        },
        {
            id: 4008,
            name: 'Palace',
            cost: 70,
            target: 'all allies',
            type: 'B',
            beforeEffect: [[`mDef`, 1.3]],
            info: `Surround all allies with a magical wall raising everyone's MDEF`,
            progress: 10,
        },
        {
            id: 4009,
            name: 'Castle',
            cost: 70,
            target: 'all allies',
            type: 'B',
            beforeEffect: [[`pDef`, 1.3]],
            info: `Surround all allies with a magical wall raising everyone's DEF`,
            progress: 10,
        },
        {
            id: 4010,
            name: 'Smite',
            cost: 20,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                if (user.buff) {return 30 * user.mAtk / target.mDef}
                else {{return 20 * user.mAtk / target.mDef}}
            },
            info: `Launch holy energy at a foe that does additional damage if the user is buffed`,
            progress: 5,
        }
    ],
}


export {skills}