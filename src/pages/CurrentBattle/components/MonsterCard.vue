<template>
  <v-card style="cursor: pointer;" :color="cardColor" :elevation="isHovering ? 24 : 6" @mouseover="isHovering = true"
    @mouseleave="isHovering = false">
    <v-card-title>
      {{ monster.name }} the {{ monster.type }}
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
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isHovering: false
  }),
  props: { monster: Object, cardColor: String },
};
</script>