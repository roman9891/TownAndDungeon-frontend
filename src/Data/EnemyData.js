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
            target: 'single enemy',
            power: 20,
            effect: {}
          }
        ],
        chooseAction: (user) => {
            return user.actions[0]
        },
        image: `https://img.itch.zone/aW1nLzE5ODczNzkuZ2lm/original/kV0CDc.gif`
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
        hp: 150,
        mhp: 150,
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
                power: 30,
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
                power: 50,
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
        hp: 150,
        mhp: 150,
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
                power: 30,
                info: `Regular attack`
            },
            {
                id: 10,
                name: 'Fireball',
                cost: 70,
                target: 'all enemy',
                type: 'D',
                damage: (user, target) => {return 40 * user.mAtk / target.mDef},
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
        hp: 500,
        mhp: 500,
        nrg: 80,
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
                power: 40,
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
    },
    {
        id: 6,
        name: `Healum`,
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
                info: 'Gather mana to restore energy'
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
                id: 2005,
                name: 'Enervate',
                cost: 70,
                target: 'single ally',
                type: 'B',
                beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1.5)]],
                info: `Raises an ally's magic attack and defense`
            },
        ],
        chooseAction: (user) => {
            if(user.nrg === user.mNrg && !user.buff) {
                user.nrg = 0
                return user.actions[2]
            } else {
                return user.actions[1]
            }
        },
        image: 'https://img.itch.zone/aW1nLzE4OTM2NTcuZ2lm/original/4afnuA.gif'
    },
    {
        id: 7,
        name: `Queener`,
        hp: 500,
        mhp: 500,
        nrg: 40,
        mNrg: 40,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                id: 2002,
                name: 'Magic Missle',
                cost: 20,
                target: 'single enemy',
                type: 'D',
                damage: (user, target) => {return 30 * user.mAtk / target.mDef},
                info: 'Strong magical attack'
            },
            {
                id: 2005,
                name: 'Enervate',
                cost: 70,
                target: 'single ally',
                type: 'B',
                beforeEffect: [[`mAtk`, 1.5],[`mDef`, (1.5)]],
                info: `Raises an ally's magic attack and defense`
            },
            {
                id: 2009,
                name: 'Lightning Storm',
                cost: 50,
                target: 'random enemy',
                hits: 3,
                type: 'D',
                damage: (user, target) => {return 30 * user.mAtk / target.mDef},
                info: "Lightning bolts randomly strike targets 3 times"
            },
        ],    
        chooseAction: (user) => {
            if (user.nrg === user.mNrg && !user.buff) {
                user.nrg = 0
                return user.actions[1]
            } else if (user.nrg === user.mNrg) {
                user.nrg = 0
                return user.actions[2]
            } else {
                return user.actions[0]
            } 
        },
        image: `https://bravefrontier.gumi.sg/assets/images/rcboss/edelma.gif`
    },
    {
        id: 8,
        name: `Snicky`,
        hp: 150,
        mhp: 150,
        nrg: 0,
        mNrg: 100,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
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
                info: `Poison an enemy`
            },
            {
                id: 3012,
                name: 'Evasion',
                cost: 0,
                target: 'self',
                type: 'S',
                beforeEffect: [[`Atk`, 1/1.5],[`pDef`, 1.25],[`mDef`, 1.25]],
                info: 'Focus on agility to raise DEF and MDEF but lower ATK'
            },
        ],    
        chooseAction: (user) => {
            if (!user.stance) {
                return user.actions[1]
            } else {
                return user.actions[0]
            }
        },
        image: `https://opengameart.org/sites/default/files/gesture_0.gif`
    },
    {
        id: 9,
        name: `Sager`,
        hp: 150,
        mhp: 150,
        nrg: 0,
        mNrg: 60,
        pAtk: 1,
        pDef: 1,
        mAtk: 1,
        mDef: 1,
        actions: [
            {
                id: 2010,
                name: 'Yoga',
                cost: 0,
                target: 'self',
                type: 'S',
                beforeEffect: [[`mAtk`, (1/1.5)],[`mDef`, 1.5]],
                info: 'Raises MDEF and lowers MATK'
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
                info: 'Gather mana to restore energy'
            },
            {
                id: 4006,
                name: 'Heal',
                cost: 50,
                target: 'single ally',
                type: 'E',
                effect: (user, target) => {
                    if ((target.hp + 30) > target.mhp) {
                        target.hp = target.mhp
                    } else {
                        target.hp = target.hp + 40
                    }  
                },
                power: 0,
                info: 'Restores a significant amount of hp to the target.'
            },
        ],    
        chooseAction: (user) => {
            if (!user.stance) {
                return user.actions[0]
            } 
            else if (user.nrg === user.mNrg) {
                user.nrg = 0
                return user.actions[2]
            }
            else {return user.actions[1]}
        },
        image: `https://i0.wp.com/www.nonadecimal.com/staging/SJW/druid.gif`
    },
    {
        id: 10,
        name: `Cheef`,
        hp: 1000,
        mhp: 1000,
        nrg: 0,
        mNrg: 60,
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
                power: 50,
                info: `Regular attack`
            },
            {
                id: 10,
                name: 'Fireball',
                cost: 70,
                target: 'all enemy',
                type: 'D',
                damage: (user, target) => {return 40 * user.mAtk / target.mDef},
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
        image: `https://cdn.lowgif.com/full/6b16311d0408e65c-.gif`
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
