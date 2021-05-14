<template>
  <div class="container">
    <div class="form-input" :class="{ 'is-error': !!errorMessage }">
      <div v-if="icon" class="icon">
        <mdicon :name="icon" size="18" />
      </div>
      <input
        class="input"
        :placeholder="placeholder"
        :type="type"
        :name="name"
        :id="name"
        :value="inputValue"
        @input="handleChange"
        @blur="handleBlur"
      />
    </div>

    <div class="hint" v-show="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>


<script lang="ts">
import { useField } from "vee-validate";
export default {
  props: {
    icon: String,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  @apply mb-2;
}
.form-input {
  @apply relative rounded bg-input border border-outline shadow-sm flex items-center p-0;
  height: var(--input-height);

  .input {
    @apply font-light text-on-input px-3 py-0 w-full text-base bg-transparent;

    &:focus {
      @apply border-none;
    }
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

  &.is-error {
    @apply border-error;
  }
}

.hint {
  @apply text-error text-sm;
}
</style>
