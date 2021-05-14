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

      <app-loading-button type="submit" text="Signin" />
    </div>
  </Form>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";

export default {
  props: {},
  components: {
    Form,
  },
  setup() {
    function onSubmit(values: any) {
      console.log(values)
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
</style>