import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { modalStyle } from "../styles/styles";
import useExperienceFormState from "../use-experience-form-state";
import useAddExperienceForm from "./use-form";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import { useContext } from "react";
import ExperiencesModalContext from "../../experiencies-modal-context";

const AddExperienceModalContent = ({ className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);
  const {
    onChangeBusinessName,
    onChangeDescription,
    onChangeEndDate,
    onChangeLocation,
    onChangeRole,
    onChangeStartDate,
    businessName,
    description,
    endDate,
    location,
    startDate,
    role,
  } = useExperienceFormState();

  const startDateValue = startDate ? startDate : new Date();

  const experience = {
    businessName,
    description,
    endDate,
    location,
    startDate: startDateValue,
    role,
  };

  const { onSubmitForm } = useAddExperienceForm({ experience });

  return (
    <Box sx={modalStyle} className={className}>
      <form onSubmit={onSubmitForm}>
        <Box>
          <IconButton onClick={() => setContent(ExperienceContent.Show)}>
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

interface Props {
  className?: string;
}

export default AddExperienceModalContent;
