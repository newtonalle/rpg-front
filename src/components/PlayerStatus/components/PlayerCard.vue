<template>
  <v-card>
    <v-card-title
      ><span class="text-capitalize"
        >{{ player.name }}, Level {{ player.level }} {{ player.class.name }} ({{
          player.experience
        }}xp)</span
      ></v-card-title
    >
    <br />
    <v-card-text>
      <v-row>
        <v-col> {{ player.gold }}🪙 </v-col>
        <v-col>
          <player-attributes
            :baseAttribute="player.attributeStrength"
            :extraAttribute="player.extraStrength"
            :totalAttribute="player.totalStrength"
            symbol="🗡️"
          />
          <div v-if="attributeMenuActive">
            <v-btn
              :disabled="remainingAttributePoints <= 0"
              color="primary"
              @click="addAttribute('attributeStrength')"
              >+</v-btn
            >
            <span>+{{ addedAttributes.attributeStrength }}</span>
          </div>
        </v-col>
      </v-row>
      <br />
      <v-row>
        <v-col> {{ player.currentHealth }}/{{ player.maxHealth }} ❤️ </v-col>
        <v-col>
          <player-attributes
            :baseAttribute="player.attributeDexterity"
            :extraAttribute="player.extraDexterity"
            :totalAttribute="player.totalDexterity"
            symbol="✋"
          />
          <div v-if="attributeMenuActive">
            <v-btn
              :disabled="remainingAttributePoints <= 0"
              color="primary"
              @click="addAttribute('attributeDexterity')"
              >+</v-btn
            >
            <span>+{{ addedAttributes.attributeDexterity }}</span>
          </div>
        </v-col>
      </v-row>
      <br />
      <v-row>
        <v-col>{{ player.currentMana }}/{{ player.maxMana }} ✨ </v-col>
        <v-col>
          <player-attributes
            :baseAttribute="player.attributeIntelligence"
            :extraAttribute="player.extraIntelligence"
            :totalAttribute="player.totalIntelligence"
            symbol="🧠"
          />
          <div v-if="attributeMenuActive">
            <v-btn
              :disabled="remainingAttributePoints <= 0"
              color="primary"
              @click="addAttribute('attributeIntelligence')"
              >+</v-btn
            >
            <span>+{{ addedAttributes.attributeIntelligence }}</span>
          </div></v-col
        >
      </v-row>
      <div v-if="showAttributeAdding">
        <br />
        <br />
        <v-btn
          :disabled="player.unallocatedAttributePoints <= 0"
          v-if="!attributeMenuActive"
          color="primary"
          @click="startAttributeAdding"
          >Add Attributes ({{ player.unallocatedAttributePoints }} APS)</v-btn
        >
        <div v-if="attributeMenuActive">
          <v-btn color="primary" @click="confirmAddedAttributes">Save</v-btn>
          <br />
          <br />
          <v-btn color="secondary" @click="attributeMenuActive = false"
            >Cancel</v-btn
          >
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import PlayerAttributes from "./PlayerAttributes.vue";
export default {
  data: () => ({
    attributeMenuActive: false,
    addedAttributes: {
      attributeStrength: 0,
      attributeDexterity: 0,
      attributeIntelligence: 0,
    },
    remainingAttributePoints: 0,
  }),
  methods: {
    ...mapActions(["addAttributePoints", "getMe", "getCurrentPlayer"]),
    addAttribute(attribute) {
      if (this.remainingAttributePoints > 0) {
        this.addedAttributes[attribute]++;
        this.remainingAttributePoints--;
      }
    },

    startAttributeAdding() {
      this.addedAttributes.attributeStrength = 0;
      this.addedAttributes.attributeDexterity = 0;
      this.addedAttributes.attributeIntelligence = 0;
      this.attributeMenuActive = true;
      this.remainingAttributePoints = this.player.unallocatedAttributePoints;
    },

    async confirmAddedAttributes() {
      await this.addAttributePoints({
        attributes: this.addedAttributes,
        playerId: this.player.id,
      });
      this.attributeMenuActive = false;
      await this.getMe();
      await this.getCurrentPlayer();
    },
  },
  name: "PlayerCard",
  components: { PlayerAttributes },
  props: {
    player: {
      required: true,
    },
    loading: {
      default: false,
    },
    showAttributeAdding: {
      default: true,
    },
  },
};
</script>