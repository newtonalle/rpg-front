<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else-if="!currentBattle.id">
      <new-battle @update="update()" />
    </div>
    <div v-else>
      <current-battle @update="update()" :currentBattle="currentBattle" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewBattle from "./components/NewBattle.vue";
import CurrentBattle from "./components/CurrentBattle.vue";
export default {
  components: { NewBattle, CurrentBattle },
  data: () => ({ loading: false, snackbar: false, isInBattle: true }),

  methods: {
    ...mapActions(["getCurrentBattle"]),
    async update() {
      this.loading = true;
      await this.getCurrentBattle();
      this.loading = false;
    },
  },

  computed: {
    ...mapState(["currentBattle"]),
  },

  async mounted() {
    this.loading = true;
    await this.getCurrentBattle();
    this.loading = false;
  },
};
</script>