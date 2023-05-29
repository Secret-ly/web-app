<template>
  <div>
    <v-btn @click="logout">
      Logout
    </v-btn>

    <div>
      Name: {{ userProfile?.name }}
    </div>
    <div>
      Public Key: {{ userPublicKey }}
    </div>

    <v-text-field v-model="fullname" />
    <v-btn @click="updateUserProfile({name: fullname})">
      Update
    </v-btn>

    <div>
      Profile: {{ userProfile }}
    </div>

    <v-text-field v-model="userPub" />
    <v-btn @click="getUserProfile(userPub)">
      Update
    </v-btn>

    <div>{{ $GUN.SEA.err }}</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  shouldAuth: true
});

const { logout, getUserProfile, userProfile, updateUserProfile, userPublicKey } = useAuthentication();

const fullname = ref('');
const userPub = ref('');

getUserProfile();
</script>

