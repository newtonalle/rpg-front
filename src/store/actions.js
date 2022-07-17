import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const createElement = (context, elementName) => context.commit('createElement', elementName)

export const createElementAuto = (context) => context.commit('createElementAuto')

export const createBuild = (context, buildName) => context.commit('createBuild', buildName)

export const buyUpgrade = (context, upgradeName) => context.commit('buyUpgrade', upgradeName)

export const verifyHighestAmount = (context) => context.commit('verifyHighestAmount')

export const ascend = (context) => context.commit('ascend')
