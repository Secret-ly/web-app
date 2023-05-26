import useAuthStore from "~/stores/authStore";
import { CreateUserResult, AuthenticateResult } from "~/types/gun";

export const useAuthentication = () => {
  const { $user } = useNuxtApp();
  const authStore = useAuthStore();
  const router = useRouter();
  const { username, isLoggingIn } = storeToRefs(authStore);

  const isAuthenticated = computed(() => !!$user.is);

  const login = (u: string, p: string) => {
    isLoggingIn.value = true;

    $user.auth(u, p, (result: AuthenticateResult) => {
      isLoggingIn.value = false;

      if (result.err) {
        console.log(result.err);
        return;
      }

      username.value = result.put?.alias ?? '';
      router.push({ name: 'index' });
    });
  };

  const createAccount = (u: string, p: string) => {
    $user.create(u, p, (result: CreateUserResult) => {
      if (result.err) {
        console.log(result.err);
        return;
      }

      login(u, p);
    });
  };

  const setUsername = async () => {
    const response = await $user.get<string>('alias').then();

    username.value = response ?? '';
  };

  const logout = () => {
    $user.leave();

    username.value = '';
    void router.push({ name: 'login' });
  };

  return {
    username,
    isAuthenticated,
    isLoggingIn,

    login,
    createAccount,
    setUsername,
    logout
  };
};
