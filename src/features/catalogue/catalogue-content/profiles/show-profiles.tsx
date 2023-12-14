import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";

const ShowProfiles = ({ profileList }: Props) => {
  return (
    <>
      {profileList.map((item: Profile) => {
        <ProfileCard profile={item} />;
      })}
    </>
  );
};

export default ShowProfiles;
interface Props {
  profileList: Profile[];
}
