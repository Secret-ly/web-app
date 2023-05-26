export const useUserLocation = () => {
  const { isSupported, coords, locatedAt } = useGeolocation({ enableHighAccuracy: true, immediate: true });

  return {
    isSupported,
    coords,
    locatedAt
  };
};
