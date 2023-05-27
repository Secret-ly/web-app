import { UserProfile } from "~/types/user";

const useAuthStore = defineStore('authStore', () => {
  const username = ref('');
  const isLoggingIn = ref(false);
  const userProfile = ref<UserProfile>();

  return {
    username,
    isLoggingIn,
    userProfile,
  };
});

export default useAuthStore;