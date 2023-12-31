import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ProfileContextProvider from "./profile-context/ProfileContextProvider";
import useProfile from "./use-profile";
import ProfileContent from "./profile-content";
import { bannerStyles } from "./profile-content/styles";
import SpinnerBlock from "components/spinner-block";
import SpinnerAbsolute from "components/spinner-absolute";

const Profile = () => {
  const profileId = parseInt(useParams<RouteParams>().id!);
  const { profile, fetchProfile, loading } = useProfile(profileId);

  return (
    <Box>
      <Box sx={bannerStyles}></Box>
      <>
        {!profile || !profileId ? (
          <SpinnerBlock style={{ mt: 16 }} />
        ) : (
          <ProfileContextProvider
            profileId={profileId}
            profile={profile}
            fetchProfile={fetchProfile}
          >
            {loading && <SpinnerAbsolute />}
            <ProfileContent />
          </ProfileContextProvider>
        )}
      </>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
