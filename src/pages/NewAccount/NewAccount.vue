<template>
  <div>
    <v-container>
      <v-row justify="center"
        ><v-col cols="4" class="pb-0">
          <v-text-field
            label="Name"
            placeholder="Name"
            outlined
            hide-details
            v-model="name"
        /></v-col>
      </v-row>
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
      <v-row justify="center"
        ><v-col cols="4">
          <v-text-field
            :type="passwordType"
            label="Password Check"
            placeholder="Password Check"
            outlined
            :append-icon="passwordIcon"
            @click:append="togglePasswordType"
            hide-details
            v-model="passwordCheck"
        /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4"
          ><v-btn
            @click="createAccount"
            color="primary"
            block
            :loading="loading"
            :disabled="
              name === '' ||
              email === '' ||
              password === '' ||
              passwordCheck === ''
            "
            >Create Account</v-btn
          ></v-col
        ></v-row
      >
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}

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
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
    loading: false,
    snackbar: false,
    snackbarText: "",
    passwordType: "password",
    passwordIcon: "mdi-eye",
  }),

  methods: {
    createAccount() {
      if (this.password === this.passwordCheck) {
        this.loading = true;
        axios
          .post(
            "/users/",
            {
              name: this.name,
              email: this.email,
              password: this.password,
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            console.log(response);
            this.loading = false;
            this.$router.push({ name: "login" });
          })
          .catch((error) => {
            console.log(error);
            if (this.name.length < 3 || this.name.length > 30) {
              this.snackbarText = "Names must have between 3-30 characters!";
            } else {
              this.snackbarText = "Email taken and/or invalid!";
            }
            this.snackbar = true;
            this.loading = false;
          });
      } else {
        this.snackbarText = "The password isn't the same!";
        this.snackbar = true;
      }
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