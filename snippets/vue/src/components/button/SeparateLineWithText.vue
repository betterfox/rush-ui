<template>
  <div class="container">
      <hr />
      <div class="text">{{text}}</div>
    </div>
</template>


<script lang="ts">
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>.container {
  @apply relative block mb-8 w-40 mx-auto;

  hr {
    @apply border border-outline;
  }

  .text {
    @apply absolute top-1/2 left-1/2 bg-surface px-4 text-sm text-secondary transform -translate-x-2/4 -translate-y-2/4;
  }
}
</style>
