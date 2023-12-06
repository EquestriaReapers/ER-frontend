import MoonLoader from "react-spinners/MoonLoader";

export const useLoader = (loading: boolean) => {
  return (
    <MoonLoader
      loading={loading}
      color="#123abc"
      speedMultiplier={1}
      size={50}
    />
  );
};
