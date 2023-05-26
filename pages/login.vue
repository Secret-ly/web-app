<script lang="ts" setup>
definePageMeta({
  shouldAuth: true
});

const { login, username, isLoggingIn, createAccount } = useAuthentication();
const alias = ref('');
const password = ref('');

const startLogin = () => {
  login(alias.value, password.value);
};
</script>

<template>
  <v-form
    :readonly="isLoggingIn"
    @submit.prevent="startLogin"
  >
    {{ username }}
    <v-text-field v-model="alias" />
    <v-text-field v-model="password" />

    <v-btn
      type="submit"
      :loading="isLoggingIn"
    >
      Submit
    </v-btn>

    <v-btn
      type="button"
      :loading="isLoggingIn"
      @click="createAccount(alias, password)"
    >
      Sign up
    </v-btn>
  </v-form>
</template>

