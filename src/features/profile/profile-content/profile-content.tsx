import Typography from "@mui/material/Typography";

import { useAuthState } from "hooks/use-auth-state";

import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./profile-skills";
import ProfileExperiences from "./profile-experience";
import { Skill } from "core/profiles/types"; // Import temporal para hacer el dummy.
// Eliminar de linea 14 a 17

const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user;
  const dummySkills: Skill[] = [
    { id: 1, name: "React" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
    { id: 4, name: "React" },
    { id: 5, name: "CSS" },
    { id: 6, name: "HTML" },
    { id: 7, name: "React" },
    { id: 8, name: "CSS" },
    { id: 9, name: "HTML" },
    { id: 10, name: "React" },
    { id: 11, name: "CSS" },
    { id: 12, name: "CSS" },
    { id: 13, name: "HTML" },
    { id: 14, name: "React" },
    { id: 15, name: "CSS" },
    { id: 16, name: "HTML" },
  ];
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);
  return (
    <div>
      {loggedUser ? (
        <div>
          <Typography variant="h3">Perfil:</Typography>
          {isEditable && <EditProfileModal />}

          <Typography variant="h4">Nombre:</Typography>
          <Typography variant="h6">
            {profile.user.name} {profile.user.lastname}
          </Typography>
          <Typography variant="h6">
            {profile.mainTitle} {profile.countryResidence}
          </Typography>
          <Typography variant="h4">Email:</Typography>
          <Typography variant="h6">{profile.user.email}</Typography>

          <Typography variant="h6">{profile.description}</Typography>

          <ProfileSkills
            isEditable={isEditable}
            currentProfileSkills={dummySkills}
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
