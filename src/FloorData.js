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
        enemies: [enemies[2]],
        info: `Meet Defo. He doesn't want any bruises. He'll try guard against attacks and buff allies. Too bad he's alone`
    },
    {
        id: 3,
        num: 4,
        enemies: [enemies[2], enemies[2]],
        info: `Double Defos. Now they're buff buddies.`
    },
    {
        id: 4,
        num: 5,
        enemies: [enemies[3], enemies[3]],
        info: `Meet Offo. She loves bruising. She'll go into an offensive stance then unleash lots of physical attacks`
    },
    {
        id: 5,
        num: 6,
        enemies: [enemies[2], enemies[3]],
        info: `Never thought I'd see the day that a Defo and Offo would team up. Well, one's defensive and one's offensive. Who should you take down first?`
    },
    {
        id: 6,
        num: 7,
        enemies: [enemies[0], enemies[3], enemies[0]], 
        info: `Ambush! That's a lot of physical attackers!`
    },
    {
        id: 7,
        num: 8,
        enemies: [enemies[4], enemies[4]], 
        info: `Meet Magu. She likes using magic and sometimes she likes blowing everything up`
    },
    {
        id: 8,
        num: 9,
        enemies: [enemies[4], enemies[2], enemies[4]], 
        info: `The Magu sister's brought a Defo this time for support.`
    },
    {
        id: 9,
        num: 10,
        enemies: [enemies[5]], 
        info: `Meet Bosso. He hates you. He's gotta tough hide and eventually he'll try and buff himself`
    }
]

export {floors}