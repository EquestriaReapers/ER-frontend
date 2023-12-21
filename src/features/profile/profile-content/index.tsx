import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./skills";
import Experiences from "./experiences";
import useProfileContext from "../profile-context/use-profile-context";

const ProfileContent = () => {
  const { profile, isEditable } = useProfileContext();
  const theme = useTheme();
  const primaryGreen = theme.palette.primary.main;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box sx={{ width: "100%", height: "80px", bgcolor: "black" }}></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "12px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="h4" sx={{ fontWeight: "700", marginRight: 1 }}>
              {profile.user.name} {profile.user.lastname}
            </Typography>
            {isEditable && <EditProfileModal />}
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", color: `${primaryGreen}` }}
          >
            {profile.mainTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              Sobre Mi
            </Typography>
            <Typography variant="h6">{profile.description}</Typography>
          </Box>
        </Box>
        <ProfileSkills />
        <Experiences />
      </Box>
    </>
  );
};

export interface Props {
  profile: Profile;
}

export default ProfileContent;
