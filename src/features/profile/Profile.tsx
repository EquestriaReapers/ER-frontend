import { useParams } from "react-router-dom";
import ProfileContextProvider from "./profile-context/ProfileContextProvider";
import useProfile from "./use-profile";
import ProfileContent from "./profile-content";
import NotFoundProfile from "./not-found-profile/NotFoundProfile";
import SpinnerBlock from "components/spinner-block";
import SpinnerAbsolute from "components/spinner-absolute";
import { bannerStyles } from "./profile-content/styles";
import { Box } from "@mui/material";

const Profile = () => {
  const profileId = parseInt(useParams<RouteParams>().id!);
  const { profile, isFirstTimeLoaded, loading, fetchProfile } =
    useProfile(profileId);

  return (
    <>
      <Box sx={bannerStyles}></Box>
      {!isFirstTimeLoaded ? (
        <SpinnerBlock style={{ mt: 16 }} />
      ) : profile && profileId ? (
        <ProfileContextProvider
          profileId={profileId}
          profile={profile}
          fetchProfile={fetchProfile}
        >
          {loading && <SpinnerAbsolute />}
          <ProfileContent />
        </ProfileContextProvider>
      ) : (
        <NotFoundProfile />
      )}
    </>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
