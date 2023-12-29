import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

//Own
import ProfileContextProvider from "./profile-context/ProfileContextProvider";
import useProfile from "./use-profile";
import ProfileContent from "./profile-content";

const Profile = () => {
  const profileId = parseInt(useParams<RouteParams>().id!);
  const { profile, fetchProfile } = useProfile(profileId);
  return (
    <Box>
      {!profile || !profileId ? (
        <Typography> El perfil no existe!</Typography>
      ) : (
        <ProfileContextProvider
          profileId={profileId}
          profile={profile}
          fetchProfile={fetchProfile}
        >
          <ProfileContent />
        </ProfileContextProvider>
      )}
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
