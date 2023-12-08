import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { modalStyle } from "../styles/styles";

const AddExperienceModalContent = ({
  setContent,
}: AddExperienceModalContentProps) => {
  return (
    <Box sx={modalStyle}>
      <form>
        <Box>
          <IconButton onClick={() => setContent(0)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>

        <Typography>Agregar experiencia</Typography>

        <Typography>
          Escribe acerca de la experiencia profesional que quieres agregar
        </Typography>

        <TextField id="role" label="Cargo / Puesto" />

        <TextField id="businessName" label="Empresa" />

        <TextField id="location" label="Ubicación" />

        <TextField id="startDate" label="Fecha Inicial" />

        <TextField id="endDate" label="Fecha Final" />

        <TextField id="description" multiline rows={4} label="Descripción" />

        <Button variant="outlined" type="submit">
          Guardar
        </Button>
      </form>
    </Box>
  );
};

interface AddExperienceModalContentProps {
  setContent: (arg0: number) => void;
}

export default AddExperienceModalContent;

/*export interface Experience {
  id: number;
  profileId: number;
  businessName: string;
  role: string;
  startDate: Date;
  location: string;
  description: string;
  endDate: Date | null;
}*/
