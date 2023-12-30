import { useSelector } from "react-redux";

const useLoaderState = () => {
  return useSelector<{ loader: boolean }>((state) => state.loader as boolean);
};

export default useLoaderState;
