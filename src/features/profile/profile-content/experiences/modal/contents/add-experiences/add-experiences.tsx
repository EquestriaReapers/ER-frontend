import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { modalStyle, titleStyles } from "../show-experiences/styles";
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

        <Typography sx={titleStyles}>Agregar experiencia</Typography>

        <Typography>
          Escribe acerca de la experiencia profesional que quieres agregar
        </Typography>

        <Box>
          <TextField id="role" label="Cargo / Puesto" onChange={onChangeRole} />
        </Box>

        <Box>
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
        </Box>

        <Box>
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
        </Box>

        <Box>
          <TextField
            id="description"
            multiline
            rows={4}
            label="Descripción"
            onChange={onChangeDescription}
          />
        </Box>
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
