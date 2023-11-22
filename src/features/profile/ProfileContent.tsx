import Typography from "@mui/material/Typography";

import { useAuthState } from "hooks/use-auth-state";

import ShowSkills from "./skills/show-skills";
import ShowExperiences from "./experiences/show-experiences";
import AddSkillsModal from "./skills/add-skills-modal";
import EditProfileModal from "./edit-profile/edit-profile-modal";
import { OneProfileResponse } from "./services/profile.service";

const ProfileContent = ({ profile, profileId }: ProfileContentProps) => {
  const loggedUser = useAuthState().user;
  return (
    <div>
      <Typography variant="h3">Perfil:</Typography>
      {loggedUser && loggedUser.id == profileId && <EditProfileModal />}

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.user.name}</Typography>

      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.user.email}</Typography>

      <Typography variant="h6">{profile.description}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      {loggedUser && loggedUser.id == profileId && <AddSkillsModal />}
      <ShowSkills skills={profile.skills} />

      <Typography variant="h4">Experiencia:</Typography>
      {loggedUser && loggedUser.id == profileId && <EditProfileModal />}
      <ShowExperiences experience={profile.experience} />
    </div>
  );
};

export interface ProfileContentProps {
  profile: OneProfileResponse;
  profileId: number;
}
export default ProfileContent;
