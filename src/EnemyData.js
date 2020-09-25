const enemies = [
    {
        id: 0,
        name: `Blob`,
        hp: 100,
        mhp: 100,
        nrg: 0,
        mNrg: 100,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                name: `Attack`,
                cost: 10,
                target: 'single enemy',
                type: 'P',
                power: 20,
                info: `Regular attack`
            }
        ],
        chooseAction: (user) => {
            return user.actions[0]
        },
        image: `https://www.ckaleb.com/wp-content/uploads/2018/05/ro-poring.gif`
    },
    {
        id: 1,
        name: `Blib`,
        hp: 100,
        mhp: 100,
        nrg: 0,
        mNrg: 100,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
          {
            name: `attacks`,
            type: 'M',
            power: 20,
            effect: {}
          }
        ],
        chooseAction: (user) => {
            return user.actions[0]
        },
        image: `https://www.ckaleb.com/wp-content/uploads/2018/05/ro-poring.gif`
    },
    {
        id: 1,
        name: `Defo`,
        hp: 100,
        mhp: 100,
        nrg: 0,
        mNrg: 20,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                name: `Attack`,
                cost: 10,
                target: 'single enemy',
                type: 'P',
                power: 20,
                info: `Regular attack`
            },
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
                name: `Embolden`,
                type: 'B',
                cost: 50,
                target: 'single ally',
                beforeEffect: [[`pDef`, 1.5],[`pAtk`, 1.5]],
                power: 0,
                info: `Raises the users attack and defense by 50%`
            },
        ],
        chooseAction: (user) => {
            if(user.nrg === user.mNrg && !user.buff) {
                user.nrg = 0
                return user.actions[2]
            }
            else if (user.stance) {
                return user.actions[0]
            } else {
                return user.actions[1]
            }
        },
        image: `https://img.itch.zone/aW1nLzE3NjgwOTguZ2lm/original/sjFC8f.gif`
    },
    {
        id: 3,
        name: `Offo`,
        hp: 100,
        mhp: 100,
        nrg: 0,
        mNrg: 40,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                name: `Attack`,
                cost: 10,
                target: 'single enemy',
                type: 'P',
                power: 20,
                info: `Regular attack`
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
                name: `Power Attack`,
                cost: 30,
                target: `single enemy`,
                type: 'P',
                power: 40,
                info: `Big beefy bash`
            },
        ],    
        chooseAction: (user) => {
            if(user.nrg === user.mNrg) {
                user.nrg = 0
                return user.actions[2]
            }
            else if (user.stance) {
                return user.actions[0]
            } else {
                return user.actions[1]
            }
        },
        image: `https://img.itch.zone/aW1nLzE5Njc5MDAuZ2lm/original/yvRVge.gif`
    },
    {
        id: 4,
        name: `Magu`,
        hp: 100,
        mhp: 100,
        nrg: 0,
        mNrg: 60,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                name: `Magic Attack`,
                cost: 10,
                target: 'single enemy',
                type: 'M',
                power: 20,
                info: `Regular attack`
            },
            {
                id: 10,
                name: 'Fireball',
                cost: 70,
                target: 'all enemy',
                type: 'D',
                damage: (user, target) => {return 50 * user.mAtk / target.mDef},
                info: "Burn's all targets"
            }
        ],    
        chooseAction: (user) => {
            if (user.nrg === user.mNrg) {
                user.nrg = 0
                return user.actions[1]
            } else {
                return user.actions[0]
            }
        },
        image: `https://opengameart.org/sites/default/files/wizard_walk.gif`
    },
    {
        id: 5,
        name: `Bosso`,
        hp: 300,
        mhp: 300,
        nrg: 0,
        mNrg: 80,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                name: `Attack`,
                cost: 10,
                target: 'single enemy',
                type: 'P',
                power: 30,
                info: `Regular attack`
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
        ],    
        chooseAction: (user) => {
            if (user.nrg === user.mNrg && !user.buff) {
                user.nrg = 0
                return user.actions[1]
            } else {
                return user.actions[0]
            } 
        },
        image: `https://thumbs.gfycat.com/WarmheartedFlimsyIndigobunting-small.gif`
    }
]

export {enemies}


// {
//     id: 0,
//     name: ``,
//     hp: 10,
//     mhp: 100,
//     nrg: 0,
//     mNrg: 100,
//     pAtk: 1,
//     pDef: 1,
//     mAtk: 1,
//     mDef: 1,
//     actions: [],    
//     chooseAction: (user) => {},
//     image: ``
// }
