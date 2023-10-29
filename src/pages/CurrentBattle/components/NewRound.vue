<template>
  <v-dialog width="400px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on"> New Round </v-btn>
    </template>
    <v-card v-if="dialogType === 0">
      <v-card-title> Choose an Action </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-btn
              color="primary"
              @click="newRound('hit', 'attack')"
              block
              :loading="isLoadingKey('hit')"
              :disabled="loading && !isLoadingKey('hit')"
              >Hit
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              @click="fowardDialogType"
              color="primary"
              block
              :loading="isLoadingKey('spells')"
              :disabled="
                player.spellLevelPlayers.length === 0 ||
                (loading && !isLoadingKey('spells'))
              "
            >
              Spells
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              color="primary"
              @click="newRound('items', 'items')"
              block
              :loading="isLoadingKey('items')"
              :disabled="loading && !isLoadingKey('items')"
              >Use Item</v-btn
            >
          </v-col>
          <v-col cols="6">
            <v-btn
              color="primary"
              @click="newRound('run', 'run')"
              block
              :loading="isLoadingKey('run')"
              :disabled="loading && !isLoadingKey('run')"
              >Run</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card v-if="dialogType === 1">
      <v-card-title>
        Choose a Spell
        <v-btn
          style="margin-left: 20px"
          color="primary"
          @click="backwardDialogType"
          >Back</v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="6"
            v-for="(spellLevelPlayer, index) in player.spellLevelPlayers"
            :key="index"
            :value="index"
          >
            <spell-box
              :spellLevelPlayer="spellLevelPlayer"
              @newRound="newRound"
            />>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SpellBox from "./SpellBox.vue";
export default {
  data: () => ({
    dialogType: 0,
    dialog: false,
    loading: false,
    loadingKey: "",
  }),
  components: { SpellBox },
  computed: {
    ...mapState(["currentBattle", "player"]),
  },
  methods: {
    ...mapActions(["createRound"]),
    isLoadingKey(key) {
      return this.loading && this.loadingKey === key;
    },
    async newRound(key, action, actionProps) {
      if (this.loading) return;
      console.log("Action", action, actionProps);
      this.loading = true;
      this.loadingKey = key;
      await this.createRound({
        playerAction: action,
        battleId: this.currentBattle.id,
        actionProps,
      });
      this.loading = false;
      this.loadingKey = "";
      this.dialog = false;
      this.$emit("update");
    },

    fowardDialogType() {
      this.dialogType++;
    },

    backwardDialogType() {
      this.dialogType--;
    },
  },
};
</script>