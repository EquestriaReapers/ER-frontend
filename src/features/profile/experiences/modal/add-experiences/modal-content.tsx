import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { modalStyle } from "../styles/styles";
import useExperienceFormState from "../../use-experience-form-state";
import useAddExperienceForm from "./use-form";

const AddExperienceModalContent = ({
  setContent,
}: AddExperienceModalContentProps) => {
  const {
    onChangeBusinessName,
    onChangeDescription,
    onChangeEndDate,
    onChangeLocation,
    onChangeRole,
    onChangeStartDate,
  } = useExperienceFormState();

  const {onSubmitForm} = useAddExperienceForm({setIsOpen})

  return (
    <Box sx={modalStyle}>
      <form onSubmit={onSubmitForm}>
        <Box>
          <IconButton onClick={() => setContent(0)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>

        <Typography>Agregar experiencia</Typography>

        <Typography>
          Escribe acerca de la experiencia profesional que quieres agregar
        </Typography>

        <TextField id="role" label="Cargo / Puesto" onChange={onChangeRole} />

        <TextField
          id="businessName"
          label="Empresa"
          onChange={onChangeBusinessName}
        />

        <TextField
          id="location"
          label="Ubicación"
          onChange={onChangeLocation}
        />

        <TextField
          id="startDate"
          label="Fecha Inicial"
          onChange={onChangeStartDate}
        />

        <TextField
          id="endDate"
          label="Fecha Final"
          onChange={onChangeEndDate}
        />

        <TextField
          id="description"
          multiline
          rows={4}
          label="Descripción"
          onChange={onChangeDescription}
        />

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
