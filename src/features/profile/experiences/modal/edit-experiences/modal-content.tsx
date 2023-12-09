import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { modalStyle } from "../styles/styles";
import { Experience } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useExperienceFormState from "../../use-experience-form-state";
import useEditExperienceForm from "./use-form";
import { useCallback, useEffect } from "react";

const EditExperienceModalContent = ({
  anExperience,
  setContent,
}: EditExperienceModalContentProps) => {
  const {
    onChangeBusinessName,
    onChangeDescription,
    onChangeEndDate,
    onChangeLocation,
    onChangeRole,
    onChangeStartDate,
    setBusinessName,
    setDescription,
    setEndDate,
    setLocation,
    setRole,
    setStartDate,
    businessName,
    description,
    endDate,
    location,
    startDate,
    role,
  } = useExperienceFormState();

  const startDateValue = startDate ? startDate : new Date();

  const getExperienceInfo = useCallback(() => {
    setBusinessName(anExperience.businessName);
    setDescription(anExperience.description);
    setEndDate(anExperience.endDate!);
    setLocation(anExperience.location);
    setRole(anExperience.role);
    setStartDate(anExperience.startDate);
  }, [
    setBusinessName,
    setDescription,
    setEndDate,
    setLocation,
    setRole,
    setStartDate,
    anExperience,
  ]);

  useEffect(() => {
    getExperienceInfo();
  }, [getExperienceInfo]);

  const newExperience = {
    businessName,
    description,
    endDate,
    location,
    startDate: startDateValue,
    role,
  };

  const experienceId = anExperience.id;

  const { onSubmitForm } = useEditExperienceForm({
    setContent,
    newExperience,
    experienceId,
  });
  return (
    <Box sx={modalStyle}>
      <form onSubmit={onSubmitForm}>
        <Box>
          <IconButton onClick={() => setContent(0)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography>Editar experiencia</Typography>

        <Typography>
          Edita los datos de la experiencia profesional que quieres modificar
        </Typography>

        <TextField
          id="role"
          label="Cargo / Puesto"
          value={newExperience.role}
          onChange={onChangeRole}
        />

        <TextField
          id="businessName"
          label="Empresa"
          value={newExperience.businessName}
          onChange={onChangeBusinessName}
        />

        <TextField
          id="location"
          label="Ubicación"
          value={newExperience.location}
          onChange={onChangeLocation}
        />

        <TextField
          id="startDate"
          label="Fecha Inicial"
          value={newExperience.startDate}
          onChange={onChangeStartDate}
        />

        <TextField
          id="endDate"
          label="Fecha Final"
          value={newExperience.endDate}
          onChange={onChangeEndDate}
        />

        <TextField
          id="description"
          multiline
          rows={4}
          label="Descripción"
          value={newExperience.description}
          onChange={onChangeDescription}
        />

        <Button variant="outlined" type="submit">
          Guardar
        </Button>
      </form>
    </Box>
  );
};

export default EditExperienceModalContent;

interface EditExperienceModalContentProps {
  anExperience: Experience;
  setContent: (arg0: number) => void;
}
