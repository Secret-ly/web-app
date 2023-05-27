import useAuthStore from "~/stores/authStore";
import { CreateUserResult, AuthenticateResult } from "~/types/gun";
import { UserProfile } from "~/types/user";

export const useAuthentication = () => {
  const { $user, $db } = useNuxtApp();
  const authStore = useAuthStore();
  const router = useRouter();
  const { username, isLoggingIn, userProfile, } = storeToRefs(authStore);

  const isAuthenticated = computed(() => !!$user.is);

  const userPublicKey = computed(() => $user.is?.pub ?? '');
  const userEncryptionKey = computed(() => $user.is?.epub ?? '');

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

  const getUserProfile = async (pub?: string) => {
    if (pub) {
      userProfile.value = await $db.user(pub).get<UserProfile>('profile').then();
      return;
    }
    userProfile.value = await $user.get<UserProfile>('profile').then();
  };

  const updateUserProfile = async (data: Partial<UserProfile>) => {
    $user.get<UserProfile>('profile').put(data);
  };

  return {
    username,
    isAuthenticated,
    isLoggingIn,
    userProfile,
    userEncryptionKey,
    userPublicKey,

    login,
    createAccount,
    setUsername,
    logout,
    getUserProfile,
    updateUserProfile
  };
};
