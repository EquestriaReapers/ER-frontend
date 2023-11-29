import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useAuthState } from "hooks/use-auth-state";

import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./profile-skills";
import ProfileExperiences from "./profile-experience";

const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user;
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);

  return (
    <div>
      {loggedUser ? (
        <div>
          <Box
            sx={{ width: "100vh", height: "80px", bgcolor: "blue" }}
          ></Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography variant="h4">{profile.user.name}</Typography>

              <Typography variant="h6">Comunicador Social</Typography>
            </Box>

            <Box>{isEditable && <EditProfileModal />}</Box>
          </Box>

          <Box>
            <Typography variant="h4">Sobre Mi</Typography>
            <Typography variant="h6">{profile.description}</Typography>
          </Box>

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
