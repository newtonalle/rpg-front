import axios from "axios";

export const saveToken = (context, token) => context.commit('saveToken', token)

export const loadToken = (context) => context.commit('loadToken')

export const logout = (context) => context.commit('logout')

export const getMe = async (context) => {
    const token = context.getters.getToken

    try {
        const response = await axios
            .get("/me", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setPlayer', response.data)
    } catch (e) {
        console.log(e)
    }

}

export const getMonsters = async (context) => {
    try {
        const response = await axios
            .get("/monsters")
        context.commit('setMonsters', response.data)
    } catch (e) {
        console.log(e)
    }

}

export const getBattles = async (context) => {
    const token = context.getters.getToken

    try {
        const response = await axios
            .get("/battles", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setBattles', response.data)
    } catch (e) {
        console.log(e)
    }
}

export const getCurrentBattle = async (context) => {
    const token = context.getters.getToken
    console.log(context.state.currentBattle)

    try {
        const response = await axios
            .get("/battles/player", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setCurrentBattle', response.data)
        console.log(response.data)
    } catch (e) {
        context.commit('setCurrentBattle', {})
        console.log(e)
    }

}

export const createMonsters = async (context) => {
    const token = context.getters.getToken

    await axios
        .post(`/monsters`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

export const newBattle = async (context, monsterId) => {
    const token = context.getters.getToken

    await axios
        .post(`/battles`, { monsterId }, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

export const createRound = async (context, battleId) => {
    const token = context.getters.getToken

    await axios
        .post(`/battles/${battleId}/rounds`, {
            playerAction: "attack",
            roundEvent: "damage"
        }, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}
