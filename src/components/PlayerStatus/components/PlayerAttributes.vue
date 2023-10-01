<template>
  <div @mouseenter="hovering = true" @mouseleave="hovering = false">
    <br />
    <p>{{ totalAttribute }} {{ symbol }}</p>
    <p v-if="hovering">
      BASE {{ baseAttribute }} {{ symbol }} + EXTRA {{ extraAttribute }}
      {{ symbol }}
    </p>
    <div v-if="!hovering">
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hovering: false,
  }),

  props: {
    totalAttribute: Number,
    baseAttribute: Number,
    extraAttribute: Number,
    symbol: String,
  },
};
</script>