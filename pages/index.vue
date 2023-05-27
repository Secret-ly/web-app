<template>
  <div>
    <div>
      Long: {{ coords.longitude }}
    </div>
    <div>
      Lat: {{ coords.latitude }}
    </div>
    {{ locatedAt }}

    {{ distance }}

    <v-btn @click="getDistance">
      Get distance
    </v-btn>

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
import haversine from 'haversine';

definePageMeta({
  shouldAuth: true
});

const { logout, getUserProfile, userProfile, updateUserProfile, userPublicKey } = useAuthentication();
const { coords, locatedAt } = useUserLocation();

const distance = ref(0);
const fullname = ref('');
const userPub = ref('');

const getDistance = () => {
  distance.value = haversine(
    { latitude: coords.value.latitude, longitude: coords.value.longitude },
    { latitude: 20.9967893, longitude: 105.84077260000001 }
  );
};

getUserProfile();
</script>

