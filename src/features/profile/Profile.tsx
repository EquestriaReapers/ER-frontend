import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProfileState from "./use-profile-state";
import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "./services/profile.service";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const { profile, setProfile } = useProfileState();

  const id = parseInt(useParams<RouteParams>().id!);

  const { token } = useAuthState();

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

  return (
    <Box>
      <ProfileContent profile={profile} profileId={id} />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
