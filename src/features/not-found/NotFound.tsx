import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { notFoundContainer } from "./styles";

const NotFound: FunctionComponent = () => {
  return (
    <Box sx={notFoundContainer}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">{getRandomNotFoundPharses()}</Typography>
    </Box>
  );
};

function getRandomNotFoundPharses() {
  const phrases = [
    "No encontramos lo que buscas 😶",
    "Lo sentimos, no encontramos lo que buscas 😔",
    "¿Seguro que estas buscando en el sitio correcto 🤨?",
    "¿Estas seguro que lo que buscas existe? 🤔",
    "No tenemos un link como ese en nuestra pagina 🤯",
    "El enlace que intentas encontrar no existe 😣",
    "Lo sentimos, eso que intentas encontrar no existe 😖",
    "Elemental mi querido Watson, esa pagina no existe 🧐",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default NotFound;
