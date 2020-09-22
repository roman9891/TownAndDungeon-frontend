import {enemies} from './EnemyData'

const floors = [
    {
        id: 0,
        num: 1,
        enemies: [enemies[0]],
        info: 'Easy Peasy'
    },
    {
        id: 1,
        num: 2,
        enemies: [enemies[0],enemies[0]],
        info: ''
    },
    {
        id: 2,
        num: 3,
        enemies: [enemies[0],enemies[0],enemies[0]],
        info: ''
    },
]

export {floors}