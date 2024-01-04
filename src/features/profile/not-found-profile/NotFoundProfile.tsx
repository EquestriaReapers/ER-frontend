import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { notFoundProfileContainer } from "./styles";

const NotFoundProfile: FunctionComponent = () => {
  return (
    <Box sx={notFoundProfileContainer}>
      <Typography variant="h1">Perfil no encontrado!</Typography>
      <Typography variant="h5">{getRandomNotFoundProfilePharses()}</Typography>
    </Box>
  );
};

function getRandomNotFoundProfilePharses() {
  const phrases = [
    "No encontramos el perfil que buscas 😶",
    "Lo sentimos, no encontramos el perfil que buscas 😔",
    "¿Seguro que que el perfil que buscas existe 🤨?",
    "¿Estas seguro que el perfil que buscas existe? 🤔",
    "No tenemos un perfil como ese en nuestra pagina 🤯",
    "El perfil que intentas encontrar no existe 😣",
    "Lo sentimos, ese perfil no existe 😖",
    "Elemental mi querido Watson, ese perfil no existe 🧐",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default NotFoundProfile;
