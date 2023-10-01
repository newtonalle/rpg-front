<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card-avatar, article, actions">
    </v-skeleton-loader>
    <div v-else>
      <player-status :player="player" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PlayerStatus from "../../components/PlayerStatus/PlayerStatus.vue";
export default {
  data: () => ({ loading: false, snackbar: false }),

  methods: {
    ...mapActions(["getMe", "getCurrentPlayer"]),
  },

  components: {
    PlayerStatus,
  },

  computed: {
    ...mapState(["player"]),
  },

  async mounted() {
    this.loading = true;
    await this.getMe();
    await this.getCurrentPlayer();
    this.loading = false;
  },
};
</script>