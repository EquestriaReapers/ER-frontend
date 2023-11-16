import { AuthState } from "features/auth/store/types";
import { useSelector } from "react-redux";

export function useAuthState(): AuthState {
    return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
  }