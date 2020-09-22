const skills = {
    warrior: [
        {
            id: 0,
            name: `attack`,
            cost: 10,
            target: 'single enemy',
            power: 20,
            info: `Regular attack`
        },
        {
            id: 1,
            name: `block`,
            class: 'warrior',
            cost: 0,
            target: 'self',
            power: 0,
            info: `Reduces damage for the turn`
        },
        {
            id: 2,
            name: `tickle`,
            cost: 1,
            target: 'single enemy',
            power: 1,
            info: `Devestatingly funny...`
        },
        {
            id: 3,
            name: `Def-Up`,
            class: 'warrior',
            cost: 20,
            target: 'self',
            beforeEffect: [[`userDamageReduction`, 1.5]],
            power: 0,
            info: `Raises the users defense by 50%`
        },
        {
            id: 4,
            name: `Atk-Up`,
            class: 'warrior',
            cost: 30,
            target: 'self',
            beforeEffect: [[`userPowerIncrease`, 1.5]],
            power: 0,
            info: `Raises the users attack by 50%`
        },
        {
            id: 5,
            name: `Embolden`,
            class: 'warrior',
            cost: 50,
            target: 'self',
            beforeEffect: [[`userDamageReduction`, 1.5],[`userPowerIncrease`, 1.5]],
            info: `Raises the users attack and defense by 50%`
        },
        {
            id: 6,
            name: `Power Attack`,
            class: 'warrior',
            cost: 30,
            target: `single enemy`,
            power: 40,
            info: `Big beefy bash`
        },
        {
            id: 7,
            name: `Cyclone`,
            cost: 40,
            target: 'all enemy',
            type: 'P',
            power: 20,
            info: `Wide reach attack that hits all enemies`
          }
    ],
    wizard: [
        {
            id: 7,
            name: `attack`,
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
            type: 'S',
            power: 0,
            info: 'Gather mana to restore energy'
        },
    ]
}


export {skills}