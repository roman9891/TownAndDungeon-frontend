import {enemies} from './EnemyData'

const floors = [
    {
        id: 0,
        num: 1,
        enemies: [enemies[0], enemies[0], enemies[0]],
        info: 'Meet Blob. He believes in one thing. Attacking enemies at random'
    },
    {
        id: 1,
        num: 2,
        enemies: [enemies[1], enemies[1], enemies[1]],
        info: `Meet Blib. She loves using magic attacks. Blib and Blob don't get along.`
    },
    {
        id: 2,
        num: 3,
        enemies: [enemies[0], enemies[2], enemies[0]],
        info: `Meet Defo. He doesn't want any bruises. He'll try guard against attacks and buff allies. Too bad he's alone`
    },
    {
        id: 3,
        num: 4,
        enemies: [enemies[1], enemies[6], enemies[1]],
        info: `Meet Healum. She loves healin' and helpin' her homies.`
    },
    {
        id: 4,
        num: 5,
        enemies: [enemies[5]], 
        info: `Meet Bosso. He hates you. He's gotta tough hide and eventually he'll try and buff himself`
    },
    {
        id: 5,
        num: 6,
        enemies: [enemies[3], enemies[3]],
        info: `Meet Offo. These guys do an awful lot of damage if left alone, but they're also very squishy`
    },
    {
        id: 6,
        num: 7,
        enemies: [enemies[4], enemies[4]], 
        info: `Meet Magu. These ladies prefer magic attacks, and when they get bored they'll try to blow everything up`
    },
    {
        id: 7,
        num: 8,
        enemies: [enemies[0], enemies[3], enemies[3], enemies[2]], 
        info: `Offo's are back for revenge and they brought support. All the attacks are physical.`
    },
    {
        id: 8,
        num: 9,
        enemies: [enemies[4], enemies[1], enemies[4], enemies[6]], 
        info: `The Magu sister's got bored and want to party. Everyone here is a licensed mage`
    },
    {
        id: 9,
        num: 10,
        enemies: [enemies[7]], 
        info: `Meet Queener, Bosso's wife. She's not just gonna let you ruin her husbands reputation. She buffs her magic attacks and then blasts you with lightning as long as she's buffed.`
    },
    {
        id: 10,
        num: 11,
        enemies: [enemies[8], enemies[0], enemies[8]],
        info: `Meet Snicky. He thinks it's funny to try and poison people and run away...but it's not funny.`

    },
    {
        id: 11,
        num: 12,
        enemies: [enemies[8], enemies[9], enemies[4]],
        info: `Meet Sager. Wise in all things. She's especially good at healing allies.`
    },
    {
        id: 12,
        num: 13,
        enemies: [enemies[5], enemies[9]], 
        info: `Bosso's back. He also brought his trusted physician.`
    },
    {
        id: 13,
        num: 14,
        enemies: [enemies[9], enemies[7], enemies[2]], 
        info: `Queener's back and she brought a lot of support. You'll have to figure out some way to disrupt her lightning storm`
    },
    {
        id: 14,
        num: 15,
        enemies: [enemies[10]], 
        info: `Queener's back and she brought a lot of support. You'll have to figure out some way to disrupt her lightning storm`
    },
]

export {floors}