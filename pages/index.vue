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
  </div>
</template>

<script lang="ts" setup>
import haversine from 'haversine';

definePageMeta({
  shouldAuth: true
});

const { logout } = useAuthentication();
const { coords, locatedAt } = useUserLocation();

const distance = ref(0);

const getDistance = () => {
  distance.value = haversine(
    { latitude: coords.value.latitude, longitude: coords.value.longitude },
    { latitude: 20.9967893, longitude: 105.84077260000001 }
  );
};
</script>

