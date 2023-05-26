export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const { isAuthenticated } = useAuthentication();

  // Do not check if the route does not require authentication
  if (!to.meta.shouldAuth) return;

  if (to.name === 'login' && isAuthenticated.value) {
    return navigateTo({ name: 'index' });
  }

  if (!isAuthenticated.value && to.name !== 'login') {
    return navigateTo({ name: 'login' });
  }
});
