<template>
    <v-card :elevation="isHovering ? 24 : 6" @mouseover="isHovering = true" @mouseleave="isHovering = false">
        <v-card-text>
            <h2>Round #{{ index }}</h2>
            <h3> {{ roundOwner(round.isPlayerRound) }}</h3>
            <br />
            <p> Player dealt {{ round.playerDamageDealt }} HP ❤️!</p>
            <p> Monster dealt {{ round.monsterDamageDealt }} HP ❤️!</p>
            <p> Player healed {{ round.playerHealthHealed }} HP ❤️!</p>
            <p> Monster healed {{ round.monsterHealthHealed }} HP ❤️!</p>
            <h4 v-if="round.isFinalRound">{{ battleWinner }} finishes the battle with a fatal blow!</h4>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        isHovering: false
    }),

    props: {
        round: Object,
        index: Number,
        playerWon: Boolean
    },

    computed: {
        battleWinner() {
            if (this.playerWon) {
                return "Player"
            } else {
                return "Monster"
            }
        },
    },

    methods: {
        roundOwner(isPlayerRound) {
            if (isPlayerRound) {
                return "Player"
            } else {
                return "Monster"
            }
        }
    }

}
</script>