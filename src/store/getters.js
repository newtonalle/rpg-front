export const getElements = (state) => state.elements

export const getBuilds = (state) => state.builds

export const getUpgrades = (state) => state.upgrades

export const getPrestige = (state) => state.prestige

export const getElementsPerSecond = (state) => {
    let elementsPerSecond = {}
    for (const key in state.elements) {
        elementsPerSecond[key] = state.elements[key].amountPerSecond * state.elements[key].perSecondBooster * state.prestige.level
    }
    return elementsPerSecond
}