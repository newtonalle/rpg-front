<template>
  <v-card>
    <v-card-title
      >"{{ player.name }}", Level {{ player.level }} {{ player.class }} ({{
        player.experience
      }}xp)</v-card-title
    >
    <v-card-text>
      <p>Email: {{ player.email }}</p>
      <v-row>
        <v-col> {{ player.totalStrength }}🗡️ </v-col>
        <v-col> {{ player.totalDexterity }}✋ </v-col>
        <v-col> {{ player.totalIntelligence }}🧠 </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      required: true,
    },
    loading: {
      default: false,
    },
  },
};
</script>