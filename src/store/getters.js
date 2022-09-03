export const getToken = (state) => state.token

export const hasPlayerLoggedIn = (state) => {
    if (state.token) {
        return true
    } else {
        return false
    }

}