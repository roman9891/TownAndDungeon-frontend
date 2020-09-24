import {enemies} from './EnemyData'

const floors = [
    {
        id: 0,
        num: 1,
        enemies: [enemies[0]],
        info: 'Meet Blob. He believes in one thing. Attacking enemies at random'
    },
    {
        id: 1,
        num: 2,
        enemies: [enemies[1]],
        info: `Meet Blib. She loves using magic attacks. Blib and Blob don't get along.`
    },
    {
        id: 2,
        num: 3,
        enemies: [enemies[0],enemies[0],enemies[0]],
        info: ``
    },
]

export {floors}