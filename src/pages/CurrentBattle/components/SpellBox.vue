<template>
    <v-btn color="secondary"
        :disabled="!spellLevelPlayer.isEquipped || spellLevelPlayer.spellLevel.manaCost > player.currentMana" block
        @click="newRound('spells', 'spell', { spellLevelPlayerId: spellLevelPlayer.id })">
        {{ spellLevelPlayer.spellLevel.spell.name }} (Lvl.{{ spellLevelPlayer.spellLevel.level }})
        <br />
        {{ spellLevelPlayer.spellLevel.manaCost }} 🪄 {{ spellLevelPlayer.spellLevel.damage }} ⚔️</v-btn>
</template>
  
<script>
import { mapState } from "vuex";

export default {
    data: () => ({
    }),

    props: { spellLevelPlayer: Object },

    computed: {
        ...mapState(["spells", "spellLevels", "player"]),
    },

    methods: {
        newRound(key, action, actionProps) {
            this.$emit("newRound", key, action, actionProps)
        }
    }
};
</script>
  
<style>
.new-battle-stepper-container {
    width: 80%;
}

.battle-container {
    height: 650px;
    background-color: #ededed;
}
</style>