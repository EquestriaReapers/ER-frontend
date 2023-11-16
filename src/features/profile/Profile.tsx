import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useProfileState from "./use-profile-state";
import { AuthState } from "features/auth/store/types";
import { fetchOneProfile } from "./services/profile.service";
import ShowSkills from "./components/show-skills";
import ShowExperiences from "./components/show-experiences";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

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
      {loggedUser && loggedUser.id == id && (
        <Link to={`/profile/edit/${loggedUser}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
      )}

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
      {loggedUser && loggedUser.id == id && (
        <Link to={`/profile/edit/${profile.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
      )}
      <ShowSkills skills={profile.skills} />

      <Typography variant="h4">Experiencia:</Typography>
      {loggedUser && loggedUser.id == id && (
        <Link to={`/profile/edit/${profile.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
      )}
      <ShowExperiences />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
