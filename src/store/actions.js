import axios from "axios";

export const saveToken = (context, token) => context.commit('saveToken', token)

export const loadToken = (context) => context.commit('loadToken')

export const logout = (context) => context.commit('logout')

export const getMe = async (context) => {
    const token = context.getters.getToken

    await new Promise(resolve => setTimeout(resolve, 3000))

    try {
        const response = await axios
            .get("/me", {
                headers: { Authorization: `Bearer ${token}` },
            })

        return response.data
    } catch (e) {
        console.log(e)
    }

}

