export default defineNuxtPlugin(async () => {
  const { setUsername, isAuthenticated } = useAuthentication();
  const { isAppLoading } = useApp();

  if (isAuthenticated.value) {
    await setUsername();
  }

  const timeout = setTimeout(() => {
    isAppLoading.value = false;

    clearTimeout(timeout);
  }, 1000);
});
