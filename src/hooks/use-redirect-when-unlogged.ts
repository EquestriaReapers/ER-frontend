import { useSelector } from "react-redux";
import { AuthState } from "../features/auth/store/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useRedirectWhenUnlogged() {
  const isLogged = useIsLogged();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate(`/login`);
  }, [navigate, isLogged]);
}

function useIsLogged(): boolean {
  return useSelector<{ auth: AuthState }>(
    (state) => state.auth.isLogged
  ) as boolean;
}
