import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { notFoundContainer } from "./styles";

const NotFound: FunctionComponent = () => {
  return (
    <Box sx={notFoundContainer}>
      <Typography sx={{ textAlign: "center" }} variant="h1">
        404
      </Typography>
      <Typography variant="h5">{getRandomNotFoundPhrases()}</Typography>
    </Box>
  );
};

function getRandomNotFoundPhrases() {
  const phrases = [
    "No encontramos lo que buscas 😶",
    "Lo sentimos, no encontramos lo que buscas 😔",
    "¿Seguro que estas buscando en el sitio correcto? 🤨",
    "¿Estás seguro que lo que buscas existe? 🤔",
    "No tenemos un link como ese en nuestra página 🤯",
    "El enlace que intentas encontrar no existe 😣",
    "Lo sentimos, eso que intentas encontrar no existe 😖",
    "Elemental mi querido Watson, esa página no existe 🧐",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default NotFound;
