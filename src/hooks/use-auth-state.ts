import { AuthState } from "core/auth/store/types";
import { useSelector } from "react-redux";

export function useAuthState(): AuthState {
  return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
}
