<template>
  <v-btn :type="type" class="button" color="">
    <div class="label" v-if="!isLoading">{{text}}</div>
    <div class="loader" v-if="isLoading">
      <img class="loader" src="/assets/images/loader/three-dots.svg" />
    </div>
  </v-btn>
</template>


<script lang="ts">
export default {
  props: {
    isLoading: Boolean,
    text: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply rounded relative text-on-primary bg-primary uppercase font-bold border-none py-3 flex items-center justify-center w-full h-12 shadow px-3 mb-2 text-sm;
  height: var(--button-height);

  &::v-deep {
    .v-btn__overlay {
      @apply bg-primary opacity-5;
    }

    .v-ripple__container {
      @apply bg-primary opacity-5;
    }
  }

  .label {
    @apply flex-1 text-on-primary;
  }

  .logo-img {
    @apply mx-auto h-8 w-8;
  }

  &:hover,
  &:focus {
    @apply bg-primary text-on-primary shadow-md;
  }
}

.loader {
  @apply w-auto h-3;
}
</style>
