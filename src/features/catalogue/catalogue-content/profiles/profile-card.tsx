import Typography from "@mui/material/Typography";
import { Profile } from "core/profiles/types";
import { Box } from "@mui/material/";
import { profileCardTypography, profileContainer } from "./styles/styles";
import ShowProfileCardSkills from "./show-profile-card-skills";

const ProfileCard = ({ profile }: Props) => {
  return (
    <Box sx={profileContainer}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#007934", fontWeight: "700" }}>
            {profile.user.name} {profile.user.lastname}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "600" }}>
            {profile.mainTitle}
          </Typography>
        </Box>
      </Box>
      <Typography sx={profileCardTypography}>{profile.description}</Typography>
      <ShowProfileCardSkills skills={profile.skills} />
    </Box>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
