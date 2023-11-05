import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from '@mui/material/Button';




import  {useState } from "react";
import RenderSkills from "./RenderSkills";
import RenderExperiences from "./RenderExperiences";
import { Link } from "react-router-dom";


import { ProfileInterface } from "./interfaces/ProfileInterface";

const Profile = () => {

  const [file, setFile] = useState("");

  const handleUpload = () => {
    // Enviar el archivo al servidor
  };

  const profile: ProfileInterface = {
    id: 1,
    name: "Luis Daniel Vasquez Paniagua",
    email: "luisvasquez8877@gmail.com",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
  };

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      <Link to={`/profile/edit/${profile.id}`}> Editar Perfil </Link>
      <Link to={`/profile/edit/skills/${profile.id}`}>Editar habilidades</Link>

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.name}</Typography>
      <Box
        component="img"
        sx={{ height: 100, width: 100, maxHeight: 100, maxWidth: 100 }}
        src={profile.image}
        alt={profile.name}
      />

      <input
        type="file"
        accept="image/*"
        id="image-upload"
        style={{ display: 'none' }}
        onChange={(e) => handleImageUpload(e)}
      />
      <Button
        color="primary"
        variant="contained"
        component="label"
        htmlFor="image-upload"
      >
        Subir Imagen
      </Button>
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
