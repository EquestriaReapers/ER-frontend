import { useSelector } from "react-redux";
import { AuthState } from "../core/auth/store/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useAuthState(): AuthState {
  return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
}

export default function useRedirectWhenLogged() {
  const { isLogged, user } = useAuthState();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate(`/home`);
  }, [navigate, isLogged, user]);
}
