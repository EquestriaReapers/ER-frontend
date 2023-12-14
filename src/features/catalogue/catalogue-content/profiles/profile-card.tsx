import Typography from "@mui/material/Typography";
import { Profile } from "core/profiles/types";

const ProfileCard = ({ profile }: Props) => {
  return (
    <>
      <Typography>
        {profile.user.name} {profile.user.lastname}
      </Typography>
      ;
    </>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
