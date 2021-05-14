<template>
  <v-btn :type="type" class="button" color="">
    <img class="logo-img" :src="logo" />
    <div class="label">{{text}}</div>
  </v-btn>
</template>


<script lang="ts">
export default {
  props: {
    isLoading: Boolean,
    text: String,
    logo: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply rounded relative text-primary bg-surface uppercase font-bold py-0 flex items-center justify-center w-full h-12 shadow border border-solid border-outline px-3 mb-2 text-sm tracking-wider;
  height: var(--button-height);

  &::v-deep {
    .v-btn__overlay {
      @apply bg-background opacity-5;
    }

    .v-ripple__container {
      @apply bg-background opacity-5;
    }
  }

  .label {
    @apply flex-1 text-on-surface;
  }

  .logo-img {
    @apply mx-auto h-8 w-8;
  }

  &:hover,
  &:focus {
    @apply bg-background text-on-background shadow-md;
  }
}
</style>
