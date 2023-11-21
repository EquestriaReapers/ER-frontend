import { useSelector } from "react-redux";
import { AuthState } from "../features/auth/store/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useAuthState(): AuthState {
  return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
}

export default function useRedirectWhenLogged() {
  const { isLogged, user } = useAuthState();
  const state = useAuthState();
  console.log(isLogged);
  console.log(user);
  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate(`/profile/${user.id}`);
      return;
    } 
  }, [navigate, isLogged, user]);
}
