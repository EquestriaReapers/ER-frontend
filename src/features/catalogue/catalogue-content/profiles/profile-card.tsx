import Typography from "@mui/material/Typography";
import { Profile } from "core/profiles/types";

const ProfileCard = ({ profile }: Props) => {
  console.log(profile);
  return (
    <div>
      <Typography>
        {profile.user.name} {profile.user.lastname}
      </Typography>
      <Typography>{profile.mainTitle}</Typography>
      <Typography>{profile.description}</Typography>
    </div>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
