import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const EditProfileForm = () => {
  return (
    <Box>
      <TextField id="name" label="Nombre" variant="outlined" />
      <TextField id="name" label="Email" variant="outlined" />
      <Link to="/profile/1">Cancelar</Link>
    </Box>
  );
};

export default EditProfileForm;
