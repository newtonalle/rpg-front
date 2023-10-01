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
        console.log(response.data)
        context.commit('setUser', response.data)
    } catch (e) {
        console.log(e)
    }

}

export const getClasses = async (context) => {
    try {
        const response = await axios
            .get("/classes")
        context.commit('setClasses', response.data)
    } catch (e) {
        console.log(e)
    }

}

export const createNewPlayer = async (context, { playerInfo, classId, userId }) => {
    const token = context.getters.getToken
    console.log(playerInfo)
    console.log(classId)
    console.log(userId)
    try {
        const response = await axios
            .post(`/users/${userId}/players/classes/${classId}`, playerInfo, {
                headers: { Authorization: `Bearer ${token}` },
            })

        console.log(response.data)
    } catch (e) {
        console.log(e)
    }

}

export const getClassById = async (context, classId) => {
    try {
        const response = await axios
            .get(`/classes/${classId}`)

        console.log(response.data)
        context.commit('setPlayerClass', response.data)
    } catch (e) {
        console.log(e)
    }

}

export const selectCurrentPlayer = async (context, playerId) => {
    const token = context.getters.getToken

    try {
        const response = await axios
            .get(`/users/select-player/${playerId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })

        console.log("token at action-front", response.data.token)
        context.commit('saveToken', response.data.token)
    } catch (e) {
        console.log(e)
    }

}

export const getCurrentPlayer = async (context) => {
    const token = context.getters.getToken

    console.log("------------------Token at get-action-----------------")
    console.log(token)
    try {
        const response = await axios
            .get("/current-player", {
                headers: { Authorization: `Bearer ${token}` },
            })
        console.log("------------------response at get-action-----------------")
        console.log(response.data)
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
            .get(`/battle-history`, {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setBattles', response.data.data)
    } catch (e) {
        console.log(e)
    }
}

export const getSpells = async (context) => {
    const token = context.getters.getToken

    try {
        const response = await axios
            .get("/spells", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setSpells', response.data)
    } catch (e) {
        console.log(e)
    }
}

export const getSpellLevels = async (context) => {
    const token = context.getters.getToken

    try {
        const response = await axios
            .get("/spells/level", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setSpellLevels', response.data)
    } catch (e) {
        console.log(e)
    }
}

export const findBattleById = async (context, battleId) => {
    const token = context.getters.getToken


    try {
        const response = await axios
            .get(`/battles/${battleId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setBattle', response.data)
    } catch (e) {
        console.log(e)
    }
}

export const getCurrentBattle = async (context) => {
    const token = context.getters.getToken
    console.log('Current Battle', context.state.currentBattle)

    try {
        const response = await axios
            .get("/current-battle", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setCurrentBattle', response.data)
        console.log(response.data)
    } catch (e) {
        context.commit('setCurrentBattle', {})
        console.log(e)
    }

}

export const getCurrentPreBattle = async (context) => {
    const token = context.getters.getToken
    console.log('Current Pre Battle', context.state.currentPreBattle)

    try {
        const response = await axios
            .get("/pre-battles/users/player", {
                headers: { Authorization: `Bearer ${token}` },
            })
        context.commit('setCurrentPreBattle', response.data)
        console.log(response.data)
    } catch (e) {
        context.commit('setCurrentPreBattle', {})
        console.log(e)
    }

}

export const createMonsters = async (context) => {
    const token = context.getters.getToken

    await axios
        .post(`/monsters`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

}

export const preBattleProcess = async (context) => {
    const token = context.getters.getToken
    let monsters

    await axios
        .post(`/monsters`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
            monsters = response.data.data
        })
        .catch((error) => {
            console.log(error);
        });

    const monsterIds = []

    monsters.forEach(monster => {
        monsterIds.push(monster.id)
    });

    await axios
        .post(`/pre-battles`, { monsterIds }, {
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

export const createRound = async (context, { playerAction, battleId, actionProps }) => {
    const token = context.getters.getToken

    await axios
        .post(`/battles/${battleId}/rounds`, {
            playerAction,
            actionProps
        }, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

// Tirar o "playerId" a partir do token?

export const levelUpSpell = async (context, { spellLevelPlayerId, playerId }) => {
    const token = context.getters.getToken

    await axios
        .post(`/players/${playerId}/spells/${spellLevelPlayerId}/levelup`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

export const addAttributePoints = async (context, { attributes, playerId }) => {
    const token = context.getters.getToken

    await axios
        .put(`/users/players/${playerId}/attributeUp`, { attributes }, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}
