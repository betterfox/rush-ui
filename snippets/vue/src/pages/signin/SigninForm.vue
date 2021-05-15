<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="form">
      <app-input
        name="email"
        icon="account-box-outline"
        placeholder="abc@gmail.com"
      />
      <app-input
        name="password"
        icon="key-outline"
        placeholder="password"
        type="password"
      />

      <div class="additional-container">
        <a class="link" href="/forgot-password">Forgot Password?</a>
        <a class="link" href="/register">Create Account</a>
      </div>

      <app-loading-button
        :isLoading="status === RequestStatus.Loading"
        type="submit"
        text="Signin"
      />
    </div>
  </Form>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { RequestStatus } from "@/enum/request-status.enum";

export default {
  props: {
    status: RequestStatus,
  },
  data() {
    return {
      RequestStatus,
    };
  },
  emits: ["on-submit"],
  components: {
    Form,
  },
  setup(props, context) {
    function onSubmit(values: any) {
      context.emit("on-submit", values);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    return {
      onSubmit,
      schema,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply mb-10;
}

.additional-container {
  @apply flex items-center justify-between mb-6 py-0;

  .link {
    @apply text-sm text-on-surface opacity-50;

    &:hover {
      @apply opacity-100;
    }
  }
}
</style>