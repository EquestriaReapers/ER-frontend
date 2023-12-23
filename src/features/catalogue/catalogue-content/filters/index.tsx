import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { typographyStyles } from "./styles/styles";
import { useState } from "react";
import Chip from "@mui/material/Chip";

const Filters = () => {

  const [selectedCarreras, setSelectedCarreras] = useState([]);


  const handleCarreraChange = (event) => {
    const value = event.target.value;
    setSelectedCarreras((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((carrera) => carrera !== value);
      } else {
        return [...prevSelected, value];
      }
    });
    console.log(value);
  };

  const handleCheckboxClick = (value) => {
    setSelectedCarreras((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((carrera) => carrera !== value);
      } else {
        return [...prevSelected, value];
      }
    });
    console.log(value);
  };



  return (
    <>
      <Typography sx={{ fontWeight: "700", fontSize: "1.25rem" }}>
        Filtrar resultados
      </Typography>

      <Typography
        sx={{
          fontWeight: "700",
          paddingTop: 2,
        }}
      >
        Carrera
      </Typography>
    { /* <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Carrera 1"
        />
        <FormControlLabel control={<Checkbox />} label="Carrera 2" />
        <FormControlLabel control={<Checkbox />} label="Carrera 3" />
        <FormControlLabel control={<Checkbox />} label="Carrera 4" />
      </FormGroup>*/}

      <Select 
        label="Carrera"
        multiple
        displayEmpty
        value={selectedCarreras}
        //onChange={handleCarreraChange}
        renderValue={(selected) => "Todas las carreras"}
        sx={{ minWidth: 120, marginBottom: 2 }}
      >
        <MenuItem value="" disabled>
          Todas las carreras
        </MenuItem>
        <MenuItem value="Carrera 1" onClick={() => handleCheckboxClick("Carrera 1")}>
          <Checkbox checked={selectedCarreras.includes("Carrera 1")} />
          Carrera 1
        </MenuItem>
        <MenuItem value="Carrera 2" onClick={() => handleCheckboxClick("Carrera 2")}>
          <Checkbox checked={selectedCarreras.includes("Carrera 2")} />
          Carrera 2
        </MenuItem>
        <MenuItem value="Carrera 3" onClick={() => handleCheckboxClick("Carrera 3")}>
          <Checkbox checked={selectedCarreras.includes("Carrera 3")} />
          Carrera 3
        </MenuItem>
        <MenuItem value="Carrera 4" onClick={() => handleCheckboxClick("Carrera 4")}>
          <Checkbox checked={selectedCarreras.includes("Carrera 4")} />
          Carrera 4
        </MenuItem>
      </Select>
      <Box>
        {selectedCarreras.map((carrera) => (
          <Chip
            key={carrera}
            label={carrera}
            onDelete={() => handleCheckboxClick(carrera)}
            color="primary"
            sx={{ marginRight: 1, marginBottom: 1 }}

          />
        ))}
      </Box>
      <Typography sx={typographyStyles}>Habilidades</Typography>
    </>
  );
};

export default Filters;