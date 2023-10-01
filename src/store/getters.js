export const getToken = (state) => state.token

export const hasUserLoggedIn = (state) => {
    if (state.token) {
        return true
    } else {
        return false
    }

}


export const hasPlayerLoggedIn = (state) => {
    if (state.player.name) {
        return true
    } else {
        return false
    }

}