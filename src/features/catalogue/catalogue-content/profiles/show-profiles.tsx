import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";

const ShowProfiles = ({ profileList }: Props) => {
  console.log(profileList);
  return (
    <>
      {profileList.profiles.map((item: Profile) => {
        return <ProfileCard profile={item} />
      })}
    </>
  );
};

export default ShowProfiles;
interface Props {
  profileList: Profile[];
}
