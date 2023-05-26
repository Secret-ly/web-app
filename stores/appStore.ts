const useAppStore = defineStore('appStore', () => {
  const isAppLoading = ref(true);

  return {
    isAppLoading
  };
});

export default useAppStore;