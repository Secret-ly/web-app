import useAppStore from "~/stores/appStore";

export const useApp = () => {
  const appStore = useAppStore();
  const { isAppLoading } = storeToRefs(appStore);

  return {
    isAppLoading
  };
};
