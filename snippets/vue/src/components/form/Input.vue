<template>
  <div class="form-input">
    <div v-if="icon" class="icon">
      <mdicon :name="icon" size="18" />
    </div>
    <input class="input" :placeholder="placeholder" :type="type" />
  </div>
</template>


<script lang="ts">
export default {
  props: {
    icon: String,
    placeholder: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  @apply relative mb-2 rounded bg-input border border-outline shadow-sm flex items-center p-0;
  height: var(--input-height);

  .input {
    @apply font-light text-on-input px-3 py-0 w-full text-base;

    &:focus {
      @apply border-none;
    }
  }

  .hint {
    @apply absolute right-0 top-0 h-full flex items-center text-xs text-on-input px-2;
  }

  .icon {
    @apply text-on-input border-surface opacity-50 w-8 flex justify-end;
    ::v-deep(.mdi) {
        @apply opacity-75;
      &::before {
        @apply hidden;
      }
    }
  }

  &.isError {
    @apply border-error;

    .hint {
      @apply text-error;
    }
  }
}
</style>
