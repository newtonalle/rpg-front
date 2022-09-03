<template>
  <div>
    <v-container>
      <v-row justify="center"
        ><v-col cols="4" class="pb-0">
          <v-text-field
            label="Email"
            placeholder="Email"
            outlined
            hide-details
            v-model="email"
        /></v-col>
      </v-row>
      <v-row justify="center"
        ><v-col cols="4">
          <v-text-field
            :type="passwordType"
            label="Password"
            placeholder="Password"
            outlined
            :append-icon="passwordIcon"
            @click:append="togglePasswordType"
            hide-details
            v-model="password"
        /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4"
          ><v-btn @click="login" color="primary" block :loading="loading"
            >Log in</v-btn
          ></v-col
        ></v-row
      >
      <v-snackbar v-model="snackbar">
        Incorrect Email/Password

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    email: "",
    password: "",
    loading: false,
    snackbar: false,
    passwordType: "password",
    passwordIcon: "mdi-eye",
  }),

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
          this.$store.dispatch("saveToken", response.data.token);
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
          this.snackbar = true;
          this.loading = false;
        });
    },

    togglePasswordType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";

      this.passwordIcon =
        this.passwordIcon === "mdi-eye" ? "mdi-eye-off" : "mdi-eye";
    },
  },
};
</script>