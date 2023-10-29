<template>
  <div>
    <v-card>
      <v-card-text>
        <h1>{{ title }}</h1>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: { title: String },
};
</script>