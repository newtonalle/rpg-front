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