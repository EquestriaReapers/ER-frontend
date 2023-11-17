import { Link } from "react-router-dom";
import useProfileState from "./use-profile-state";
import ShowSkills from "./components/show-skills";
import ShowExperiences from "./components/show-experiences";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const { profile, loggedUser, id } = useProfileState();

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      {loggedUser && loggedUser.id == id && (
        <Link to={`/profile/edit/${profile.user.id}`}>
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
        <Link to={`/profile/edit/${profile.user.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
      )}
      <ShowSkills />

      <Typography variant="h4">Experiencia:</Typography>
      {loggedUser && loggedUser.id == id && (
        <Link to={`/profile/edit/${profile.user.id}`}>
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

export default Profile;
