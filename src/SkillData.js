const skills = {
    warrior: [
        {
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 20,
            info: `Regular attack`
        },
        //   {
        //     name: `Block`,
        //     cost: 0,
        //     target: 'self',
        //     power: 0,
        //     info: `Reduces damage for the turn`
        //   },
        //   {
        //     name: `Tickle`,
        //     cost: 1,
        //     target: 'single enemy',
        //     power: 1,
        //     info: `Devestatingly funny...`
        //   },
          {
            name: `Guard Stance`,
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`pDef`, 1.5], [`pAtk`, (1/1.5)]],
            power: 0,
            info: `Raises the users defense by 50%`
          },
          {
            name: `Beserker Stance`,
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`pAtk`, 1.5],[`pDef`, (1/1.5)]],
            power: 0,
            info: `Raises the users attack by 50%`
          },
          {
            name: `Embolden`,
            type: 'B',
            cost: 50,
            target: 'single ally',
            beforeEffect: [[`pDef`, 1.5],[`pAtk`, 1.5]],
            power: 0,
            info: `Raises the users attack and defense by 50%`
          },
          {
            name: `Power Attack`,
            cost: 50,
            target: `single enemy`,
            type: 'P',
            power: 40,
            info: `Big beefy bash`
          },
          {
            name: `Cyclone`,
            cost: 50,
            target: 'all enemy',
            type: 'P',
            power: 20,
            info: `A wide attack against all enemies`
        },
        {
            id: 10,
            name: 'Aura Strike',
            cost: 30,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {
                if (user.buff) return 30 * user.pAtk / target.mDef
                else return 20 * user.pAtk / target.pDef
            },
            info: 'An attack that resonates with auras. Does extra damage if buffed.'
        },
        {
            id: 13,
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
            info: 'Forceful blow that removes the targets stance'
        },
        {
            id: 14,
            name: 'Rest',
            cost: 0,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if ((user.hp + 10) > user.mHp) {
                    user.hp = user.mHp
                } else {
                    user.hp = user.hp + 10
                } 
            },
            power: 0,
            info: `Increase user's chance of being targeted`
        },
        {
            id: 15,
            name: 'Provoke',
            cost: 10,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if (user.hide) {user.hide = false}
                user.provoke = true
            },
            power: 0,
            info: 'Take a breather and regain HP'
        }
    ],
    wizard: [
        {
            id: 7,
            name: `Attack`,
            cost: 10,
            target: 'single enemy',
            type: 'P',
            power: 10,
            info: `Regular attack`
        },
        {
            id: 8,
            name: 'Charge',
            cost: 0,
            target: 'self',
            type: 'E',
            effect: (user, target) => {
                if ((user['starting-energy'] + 10) > user['max-energy']) {
                    user['starting-energy'] = user['max-energy']
                } else {
                    user['starting-energy'] = user['starting-energy'] + 10
                }  
            },
            power: 0,
            info: 'Gather mana to restore energy'
        },
        {
            id: 9,
            name: 'Magic Missle',
            cost: 30,
            target: 'single enemy',
            type: 'D',
            damage: (user, target) => {return 30 * user.mAtk / target.mDef},
            info: 'Strong magical attack'
        },
        {
            id: 10,
            name: 'Fireball',
            cost: 70,
            target: 'all enemy',
            type: 'D',
            damage: (user, target) => {return 50 * user.mAtk / target.mDef},
            info: "Burn's all targets"
        },
        {
            id: 11,
            name: 'Trance',
            cost: 0,
            target: 'self',
            type: 'S',
            beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1/1.5)]],
            info: 'Raises magic attack and lowers magic defense'
        },
        {
            id: 12,
            name: 'Enervate',
            cost: 50,
            target: 'single ally',
            type: 'B',
            beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1.5)]],
            info: `Raises an ally's magic attack and defense`
        },
        {
            id: 16,
            name: 'Invisibility',
            cost: 50,
            target: 'single ally',
            type: 'E',
            effect: (user, target) => {
                if (target.provoke) {target.provoke = false}
                target.hide = true
            },
            info: `Decreases the targets chance of being targeted`
        },
        {
            id: 17,
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
            info: `Remove an enemy's buff`
        },
    ]
}


export {skills}