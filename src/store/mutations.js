export const saveToken = (state, token) => {
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

export const setPlayer = (state, player) => {
    state.player = player
}

export const setBattles = (state, battles) => {
    state.battles = battles
}

export const setCurrentBattle = (state, currentBattle) => {
    state.currentBattle = currentBattle
}

export const setMonsters = (state, monsters) => {
    state.monsters = monsters
}

