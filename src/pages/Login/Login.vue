<template>
  <div>
    <v-container>
      <v-row justify="center"
        ><v-spacer /><v-col cols="4" class="pb-0">
          <v-text-field
            label="Email"
            placeholder="Email"
            outlined
            solo
            v-model="email" /></v-col
        ><v-spacer />
      </v-row>
      <v-row justify="center"
        ><v-spacer /><v-col cols="4">
          <v-text-field
            label="Password"
            placeholder="Password"
            outlined
            solo
            v-model="password" /></v-col
        ><v-spacer
      /></v-row>
      <v-row>
        <v-spacer />
        <v-col cols="4"
          ><v-btn @click="login" primary block :loading="loading"
            >Log in</v-btn
          ></v-col
        ><v-spacer
      /></v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({ email: "", password: "", loading: false }),

  methods: {
    login() {
      console.log(this.email, this.password);
      this.loading = true;
      axios
        .post(
          "/auth/login",
          {
            email: this.email,
            password: this.password,
          },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(response);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>