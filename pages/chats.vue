<script lang="ts" setup>
const { chatRooms, getChatRooms, createNewChat } = useChats();

const userPub = ref('GScBfh-e-J3MqHDr9Dg06Hq5WD2el71OC3kxE3Lq1HQ.E-srq_KTWWiZ62-Aa4ClSnBmar3PhCPTglYQ-PkgZl8');

getChatRooms();
</script>

<template>
  <div>
    <v-text-field
      v-model="userPub"
      label="New chat with"
    >
      <template #append>
        <v-btn @click="createNewChat">
          Add
        </v-btn>
      </template>
    </v-text-field>
    {{ chatRooms }}
  </div>
</template>

<style scoped></style>
