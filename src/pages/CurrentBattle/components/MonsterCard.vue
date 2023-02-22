<template>
  <div>
    <v-card-title>
      {{ monster.name }}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          {{ monster.currentHealth }}/{{ monster.maxHealth }} ❤️
          <br />
          <br />
          {{ monster.currentMana }}/{{ monster.maxMana }} ✨
          <br />
        </v-col>

        <v-col>
          {{ monster.strength }} 🗡️
          <br />
          {{ monster.dexterity }} ✋
          <br />
          {{ monster.intelligence }} 🧠
          <br />
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: { monster: Object },
};
</script>