import EditProfileModal from "./edit-profile/edit-profile-modal";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddSkillsModal from "./skills/add-skills-modal";
import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProfileState from "./use-profile-state";
import { useAuthState } from "hooks/use-auth-state";
import { fetchOneProfile } from "./services/profile.service";
import ShowSkills from "./skills/show-skills";
import ShowExperiences from "./experiences/show-experiences";

const Profile = () => {
  const { profile, setProfile } = useProfileState();

  const id = parseInt(useParams<RouteParams>().id!);

  const { token } = useAuthState();
  const loggedUser = useAuthState().user;

  const getProfile = useCallback(async () => {
    try {
      if (token && id) {
        const data = await fetchOneProfile(token, id);
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token, id, setProfile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      {loggedUser && loggedUser.id == id && <EditProfileModal />}

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.user.name}</Typography>

      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.user.email}</Typography>

      <Typography variant="h6">{profile.description}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      {loggedUser && loggedUser.id == id && <AddSkillsModal />}
      <ShowSkills skills={profile.skills} />

      <Typography variant="h4">Experiencia:</Typography>
      {loggedUser && loggedUser.id == id && <EditProfileModal />}
      <ShowExperiences experience={profile.experience} />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
