import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useProfileState from "./use-profile-state";
import { AuthState } from "features/auth/store/types";
import { fetchOneProfile } from "./services/profile.service";
import ShowSkills from "./skills/show-skills";
import ShowExperiences from "./experiences/show-experiences";
import EditProfileModal from "./edit-profile/edit-profile-modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddSkillsModal from "./skills/add-skills-modal";
const Profile = () => {
  const { profile, setProfile } = useProfileState();

  const id = parseInt(useParams<RouteParams>().id!);

  function useAuthState(): AuthState {
    return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
  }
  const { token } = useAuthState();
  const loggedUser = useAuthState().user;

  const getProfile = useCallback(async () => {
    try {
      if (token && id) {
        const data = await fetchOneProfile(token, id);
        setProfile(data);
        console.log(token);
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
      <Box
        component="img"
        sx={{ height: 100, width: 100, maxHeight: 100, maxWidth: 100 }}
        src={profile.image}
        alt={profile.user.name}
      />

      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.user.email}</Typography>

      <Typography variant="h6">{profile.description}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      {loggedUser && loggedUser.id == id && <AddSkillsModal />}
      <ShowSkills skills={profile.skills} />

      <Typography variant="h4">Experiencia:</Typography>
      {loggedUser && loggedUser.id == id && <EditProfileModal />}
      <ShowExperiences />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
