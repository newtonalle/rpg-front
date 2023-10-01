<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <div v-if="battles.length === 0">
        <p>You have not participated in any battles...</p>
      </div>
      <v-row
        v-for="(battle, index) in battles"
        justify="center"
        :key="`battle-${index}`"
      >
        <v-col cols="4">
          <battle-card :battle="battle" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BattleCard from "./components/BattleCard.vue";
export default {
  components: {
    BattleCard,
  },

  data: () => ({ loading: false }),

  methods: {
    ...mapActions(["getBattles"]),
  },

  computed: {
    ...mapState(["battles"]),
  },

  async mounted() {
    this.loading = true;
    await this.getBattles();
    this.loading = false;
  },
};
</script>