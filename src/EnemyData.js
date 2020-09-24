const enemies = [
    {
        id: 0,
        name: `Blob`,
        hp: 10,
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
            type: 'P',
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
]

export {enemies}