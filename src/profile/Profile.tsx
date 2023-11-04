import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import RenderSkills from "./RenderSkills";
import RenderExperiences from "./RenderExperiences";
import { Link } from "react-router-dom";

import { ProfileInterface } from "./interfaces/ProfileInterface";

const Profile = () => {
  const profile: ProfileInterface = {
    id: 1,
    name: "Luis Daniel Vasquez Paniagua",
    email: "luisvasquez8877@gmail.com",
  };

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      <Link to={`/profile/edit/${profile.id}`}> Editar Perfil </Link>

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.name}</Typography>
      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.email}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      <RenderSkills />

      <Typography variant="h4">Experiencia:</Typography>
      <RenderExperiences />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

export default Profile;
