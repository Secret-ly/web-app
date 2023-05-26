const useAuthStore = defineStore('authStore', () => {
  const username = ref('');
  const isLoggingIn = ref(false);

  return {
    username,
    isLoggingIn
  };
});

export default useAuthStore;