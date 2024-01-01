import { useParams } from "react-router-dom";
import ProfileContextProvider from "./profile-context/ProfileContextProvider";
import useProfile from "./use-profile";
import ProfileContent from "./profile-content";
import Loader from "hooks/use-loader";
import NotFoundProfile from "./not-found-profile/NotFoundProfile";

const Profile = () => {
  const profileId = parseInt(useParams<RouteParams>().id!);
  const { profile, isFirstTimeLoaded, fetchProfile } = useProfile(profileId);

  return (
    <>
      {!isFirstTimeLoaded ? (
        <Loader />
      ) : profile && profileId ? (
        <ProfileContextProvider
          profileId={profileId}
          profile={profile}
          fetchProfile={fetchProfile}
        >
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
