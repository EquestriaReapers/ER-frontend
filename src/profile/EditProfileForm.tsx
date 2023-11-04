import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
const EditProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box>
      <FormControl
        onSubmit={(event) => {
          event.preventDefault();
          console.log("hola");
        }}
      >
        <TextField
          id="name"
          value={name}
          label="Nombre"
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="email"
          value={email}
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button variant="outlined" type="submit">
          Confirmar
        </Button>
        <Link to={`/profile/1`}>Regresar</Link>
      </FormControl>
    </Box>
  );
};

export default EditProfileForm;
