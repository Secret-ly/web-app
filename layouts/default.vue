<script lang="ts" setup>
const { isAppLoading } = useApp();
</script>

<template>
  <v-app full-height>
    <v-main>
      <div
        v-if="isAppLoading"
        class="h-100 w-100 d-flex justify-center align-center"
      >
        <v-progress-circular
          color="primary"
          size="60"
          indeterminate
        />
      </div>
      <slot v-else />
    </v-main>
  </v-app>
</template>
