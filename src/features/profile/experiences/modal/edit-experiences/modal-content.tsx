import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Experience } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { modalStyle} from "../styles/styles";

const EditExperienceModalContent = ({
  anExperience,
  setContent,
}: EditExperienceModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <Box>
        <IconButton onClick={() => setContent(0)}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Typography>Editar experiencia</Typography>

      <Typography>
        Edita los datos de la experiencia profesional que quieres modificar
      </Typography>

      <TextField id="role" label="Cargo / Puesto" value={anExperience.role} />

      <TextField
        id="businessName"
        label="Empresa"
        value={anExperience.businessName}
      />

      <TextField
        id="location"
        label="Ubicación"
        value={anExperience.location}
      />

      <TextField
        id="startDate"
        label="Fecha Inicial"
        value={anExperience.startDate}
      />

      <TextField
        id="endDate"
        label="Fecha Final"
        value={anExperience.endDate}
      />

      <TextField
        id="description"
        multiline
        rows={4}
        label="Descripción"
        value={anExperience.description}
      />

      <Button variant="outlined" type="submit">
        Guardar
      </Button>
    </Box>
  );
};

export default EditExperienceModalContent;

interface EditExperienceModalContentProps {
  anExperience: Experience;
  setContent: (arg0: number) => void;
}
