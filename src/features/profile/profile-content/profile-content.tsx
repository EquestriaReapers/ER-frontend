import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuthState } from "hooks/use-auth-state";

import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./profile-skills";
import ProfileExperiences from "./profile-experience";

const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user;
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);
  const theme = useTheme();
  const primaryGreen = theme.palette.primary.main;

  return (
    <div>
      {loggedUser ? (
        <div>
          <Box sx={{ width: "100vh", height: "80px", bgcolor: "black" }}></Box>

          <Container
            sx={{ display: "flex", flexWrap: "wrap", marginTop: "15px" }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "700", marginRight: 1 }}
              >
                {profile.user.name} {profile.user.name}
              </Typography>
            </Box>

            <Box>{isEditable && <EditProfileModal />}</Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: `${primaryGreen}` }}
            >
              Comunicador Social
            </Typography>
          </Container>

          <Container>
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              Sobre Mi
            </Typography>
            <Typography variant="h6">{profile.description}</Typography>
          </Container>

          <ProfileSkills
            isEditable={isEditable}
            currentProfileSkills={profile.skills}
          />

          <ProfileExperiences
            isEditable={isEditable}
            currentProfileExperience={profile.experience}
          />
        </div>
      ) : (
        <Typography>No se encontro el perfil!</Typography>
      )}
    </div>
  );
};

export interface ProfileContentProps {
  profile: Profile;
}
export default ProfileContent;
