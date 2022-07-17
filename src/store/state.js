export default () => ({
    elements: {
        fire: {
            amountPerClick: 1,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: [],
            lore: 'Essence of everything that is warm...',
            simbol: '🔥',
            label: 'Fire'
        },

        earth: {
            amountPerClick: 1,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: [],
            lore: 'Essence of everything that is sturdy...',
            simbol: '🌎',
            label: 'Earth'
        },

        water: {
            amountPerClick: 1,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: [],
            lore: 'Essence of everything that is wet...',
            simbol: '💧',
            label: 'Water'
        },

        air: {
            amountPerClick: 1,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: [],
            lore: 'Essence of everything that makes wind...',
            simbol: '💨',
            label: 'Air'
        },

        life: {
            amountPerClick: 1,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: ['fire', 'earth', 'water', 'air'],
            cost: 1000,
            costMultiplier: 2,
            lore: 'Essence of everything that is alive...',
            simbol: '❤️',
            label: 'Life'
        },

        raio: {
            amountPerClick: 10,
            amountPerSecond: 0,
            perSecondBooster: 1,
            amount: 0,
            highestAmount: 0,
            elementalCost: ['fire'],
            cost: 99,
            costMultiplier: 10,
            lore: 'Rainho mucho loco',
            simbol: '⚡',
            label: 'Thunder'
        },
    },

    prestige: {
        level: 1,
        timesAscended: 0,
        creationEssence: 0,
        upgrades: {
            thunderstorm: {
                name: 'Thunderstorm',
                lore: 'Watch out this lighting!',
                type: 'perClickMultiplier',
                multiplier: 5,
                element: 'fire',
                cost: 2,
                bought: false,
            },
        },
    },

    builds: {
        campfire: {
            name: 'Campfire',
            lore: 'Made from sticks of wood',
            element: 'fire',
            cost: 10,
            costMultiplier: 1.2,
            amountOfElementPerSecond: 0.1,
            amountOfBuild: 0,
        },
        terraformer: {
            name: 'Terraformer',
            lore: 'Mines chunks of earth',
            element: 'earth',
            cost: 20,
            costMultiplier: 1.2,
            amountOfElementPerSecond: 0.2,
            amountOfBuild: 0
        },
        river: {
            name: 'River',
            lore: 'Crystaline flowing water',
            element: 'water',
            cost: 25,
            costMultiplier: 1.2,
            amountOfElementPerSecond: 0.3,
            amountOfBuild: 0
        },
        windmill: {
            name: 'Windmill',
            lore: 'Turns wind into stable air',
            element: 'air',
            cost: 35,
            costMultiplier: 1.2,
            amountOfElementPerSecond: 0.5,
            amountOfBuild: 0
        },

    },

    upgrades: {
        fieryTouch: {
            name: 'Fiery Touch',
            lore: 'Makes your touch warm everything',
            type: 'perClickMultiplier',
            multiplier: 2,
            element: 'fire',
            cost: 50,
            bought: false,
        },

        greenHand: {
            name: 'Green Hand',
            lore: "A gardener's gift",
            type: 'perClickMultiplier',
            multiplier: 3,
            element: 'earth',
            cost: 75,
            bought: false,
        },

        icyFingers: {
            name: 'Icy Fingers',
            lore: 'Let it go... Let it go...',
            type: 'perClickMultiplier',
            multiplier: 4,
            element: 'water',
            cost: 100,
            bought: false,
        },

        tornadoPower: {
            name: 'Tornado Power',
            lore: 'Be careful...',
            type: 'perClickMultiplier',
            multiplier: 5,
            element: 'air',
            cost: 125,
            bought: false,
        },

        blueFire: {
            name: 'Blue Fire',
            lore: 'Much more durable fire!',
            type: 'perSecondMultiplier',
            multiplier: 5,
            element: 'fire',
            cost: 100,
            bought: false,
        },

        fungiCompost: {
            name: 'Fungi Compost',
            lore: 'A compost made out of fungi!',
            type: 'perSecondMultiplier',
            multiplier: 10,
            element: 'earth',
            cost: 200,
            bought: false,
        },

        rainfallSeason: {
            name: 'Rainfall Season',
            lore: 'Have you ever seen the rain?',
            type: 'perSecondMultiplier',
            multiplier: 15,
            element: 'water',
            cost: 300,
            bought: false,
        },

        strongerWinds: {
            name: 'Stronger Winds',
            lore: 'May the wind force be with you...',
            type: 'perSecondMultiplier',
            multiplier: 20,
            element: 'air',
            cost: 400,
            bought: false,
        },

        vitalEnergy: {
            name: 'Vital Energy',
            lore: 'May the wind force be with you...',
            type: 'perSecondMultiplier',
            multiplier: 20,
            element: 'life',
            cost: 2,
            bought: false,
        }


    },
})