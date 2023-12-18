import Typography from "@mui/material/Typography";
import { Profile } from "core/profiles/types";
import { Box } from "@mui/material/";
import { skillTitleStyles } from "./styles/styles";

const ProfileCard = ({ profile }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        paddingBottom: "10px",
        width: "90%",
        margin: "auto",
      }}
    >
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
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
        }}
      >
        {profile.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {profile.skills.slice(0, 12).map((skill) => (
          <Typography sx={skillTitleStyles}>{skill.name}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
