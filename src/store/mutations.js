export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const createElement = (state, elementName) => {
    if (!state.elements[elementName].elementalCost.length) {
        state.elements[elementName].amount += state.elements[elementName].amountPerClick
    } else {

        let hasEnough = true

        state.elements[elementName].elementalCost.forEach(element => {

            if (state.elements[element].amount < state.elements[elementName].cost) {
                console.log('You have too little ' + state.elements[element].label)
                hasEnough = false
            } else {
                console.log('You have enough ' + state.elements[element].label)
            }
        });
        if (hasEnough) {
            console.log('You had enough elements')
            state.elements[elementName].elementalCost.forEach(element => {
                state.elements[element].amount -= state.elements[elementName].cost
            });
            state.elements[elementName].cost = Math.ceil(state.elements[elementName].cost * state.elements[elementName].costMultiplier)
            state.elements[elementName].amount += state.elements[elementName].amountPerClick
        } else {
            console.log('You did not have enough elements')
        }

    }
}


export const createElementAuto = (state) => {


    for (const key in state.builds) {
        let x = (state.elements[state.builds[key].element].amount + (state.elements[state.builds[key].element].amountPerSecond * state.elements[state.builds[key].element].perSecondBooster * state.prestige.level))
        state.elements[state.builds[key].element].amount = parseFloat(parseFloat(x).toFixed(1))


    }

}



export const createBuild = (state, buildName) => {
    if (state.elements[state.builds[buildName].element].amount >= state.builds[buildName].cost) {
        state.elements[state.builds[buildName].element].amount -= state.builds[buildName].cost
        state.builds[buildName].amountOfBuild += 1
        let x = (state.elements[state.builds[buildName].element].amountPerSecond + state.builds[buildName].amountOfElementPerSecond)
        state.elements[state.builds[buildName].element].amountPerSecond = parseFloat(parseFloat(x).toFixed(1))
        state.builds[buildName].cost = Math.ceil(state.builds[buildName].cost * state.builds[buildName].costMultiplier)
    }
}

export const buyUpgrade = (state, upgradeName) => {
    if (state.elements[state.upgrades[upgradeName].element].amount >= state.upgrades[upgradeName].cost) {
        if (!state.upgrades[upgradeName].bought) {
            switch (state.upgrades[upgradeName].type) {
                case 'perClickMultiplier':
                    state.elements[state.upgrades[upgradeName].element].amountPerClick = state.elements[state.upgrades[upgradeName].element].amountPerClick * state.upgrades[upgradeName].multiplier
                    break;

                case 'perSecondMultiplier':
                    state.elements[state.upgrades[upgradeName].element].perSecondBooster = state.elements[state.upgrades[upgradeName].element].perSecondBooster * state.upgrades[upgradeName].multiplier
                    break;
                default:
                    break;
            }
            state.elements[state.upgrades[upgradeName].element].amount -= state.upgrades[upgradeName].cost
            state.upgrades[upgradeName].bought = true
        }
    }
}

export const verifyHighestAmount = (state) => {
    for (const key in state.elements) {
        if (state.elements[key].amount > state.elements[key].highestAmount) {
            state.elements[key].highestAmount = state.elements[key].amount
        }
    }
}

export const ascend = (state) => {

    if (confirm("Are you sure you want to ascend?")) {
        console.log(`You gained ${state.elements.life.amount} prestige levels and 
        ${state.elements.life.amount * 2} creation essence...`)
        state.prestige.level += state.elements.life.amount
        state.prestige.creationEssence += state.elements.life.amount * 2
    }
}