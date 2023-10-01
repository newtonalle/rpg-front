export const saveToken = (state, token) => {
    console.log("old token", state.token)
    console.log("new token", token)
    state.token = token
    localStorage.setItem('token', token)
}

export const loadToken = (state) => {
    state.token = localStorage.getItem('token')
}

export const logout = (state) => {
    localStorage.removeItem('token');
    state.token = undefined
}

export const setUser = (state, user) => {
    state.user = user
}

export const setPlayer = (state, player) => {
    state.player = player
}

export const setClasses = (state, classes) => {
    state.classes = classes
}

export const setPlayerClass = (state, playerClass) => {
    state.playerClass = playerClass
}

export const setBattles = (state, battles) => {
    state.battles = battles
}

export const setBattle = (state, battle) => {
    state.battle = battle
}

export const setSpells = (state, spells) => {
    state.spells = spells
}

export const setSpellLevels = (state, spellLevels) => {
    state.spellLevels = spellLevels
}

export const setSpellLevelPlayers = (state, spellLevelPlayers) => {
    state.spellLevelPlayers = spellLevelPlayers
}

export const setCurrentBattle = (state, currentBattle) => {
    state.currentBattle = currentBattle
}

export const setCurrentPreBattle = (state, currentPreBattle) => {
    state.currentPreBattle = currentPreBattle
}

export const setMonsters = (state, monsters) => {
    state.monsters = monsters
}

