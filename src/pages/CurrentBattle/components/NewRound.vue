<template>
    <v-dialog width="400px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">
                New Round
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                Choose an Action
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-btn color="primary" @click="newRound('hit')" block :loading="isLoadingKey('hit')"
                            :disabled="loading && !isLoadingKey('hit')">Hit</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn color="primary" @click="newRound('spells')" block :loading="isLoadingKey('spells')"
                            :disabled="loading && !isLoadingKey('spells')">Spells</v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <v-btn color="primary" @click="newRound('items')" block :loading="isLoadingKey('items')"
                            :disabled="loading && !isLoadingKey('items')">Use Item</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn color="primary" @click="newRound('run')" block :loading="isLoadingKey('run')"
                            :disabled="loading && !isLoadingKey('run')">Run</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data: () => ({
        dialog: false,
        loading: false,
        loadingKey: ''
    }),
    computed: {
        ...mapState(["currentBattle"]),
    },
    methods: {
        ...mapActions(["createRound"]),
        isLoadingKey(key) {
            return this.loading && this.loadingKey === key
        },
        async newRound(key, action, actionProps) {
            if (this.loading) return;
            console.log('Action', action, actionProps)
            this.loading = true;
            this.loadingKey = key
            await this.createRound(this.currentBattle.id);
            this.loading = false;
            this.loadingKey = ''
            this.dialog = false
            this.$emit("update");
        },
    }
}
</script>