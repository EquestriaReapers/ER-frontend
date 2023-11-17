import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AuthState } from "features/auth/store/types";
import { fetchOneProfile } from "./services/profile.service";

export default function useProfileState() {
  const [profile, setProfile] = useState({
    userId: null as number | null,
    image: "",
    description: "",
    user: {
      email: "",
      id: 0,
      name: "",
      role: "",
      deletedAt: null as Date | null,
    },
  });
  const id = parseInt(useParams<RouteParams>().id!);

  function useAuthState(): AuthState {
    return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
  }
  const { token, user: loggedUser } = useAuthState();

  const getProfile = useCallback(async () => {
    try {
      if (!token || !id) return;
      const data = await fetchOneProfile(token, id);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }, [token, id, setProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return {
    profile,
    loggedUser,
    id
  };
}

interface RouteParams {
  [key: string]: string | undefined;
}
