import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Experience } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useExperienceFormState from "../use-experience-form-state";
import useEditExperienceForm from "./use-form";
import { useCallback, useContext, useEffect } from "react";
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
} from "./styles";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import ExperiencesModalContext from "../../experiencies-modal-context";

const EditExperienceModalContent = ({ anExperience, className }: Props) => {
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
  const { setContent } = useContext(ExperiencesModalContext);
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
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(ExperienceContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar experiencia</Typography>

        <Typography className="exp-show-description">
          Edita los datos de la experiencia profesional que quieres modificar
        </Typography>
      </Box>
      <Box >
        <form onSubmit={onSubmitForm}>
          <Box>
            <TextField
              sx={textFieldStyles}
              id="role"
              label="Cargo / Puesto"
              value={newExperience.role}
              onChange={onChangeRole}
            />
            <Box className="inputStyles">
              <TextField
                sx={textFieldStyles}
                id="businessName"
                label="Empresa"
                value={newExperience.businessName}
                onChange={onChangeBusinessName}
              />

              <TextField
                sx={textFieldStyles}
                id="location"
                label="Ubicación"
                value={newExperience.location}
                onChange={onChangeLocation}
              />
            </Box>
            <Box className="inputStyles">
              <TextField
                sx={textFieldStyles}
                id="startDate"
                label="Fecha Inicial"
                value={newExperience.startDate}
                onChange={onChangeStartDate}
              />
              <TextField
                sx={textFieldStyles}
                id="endDate"
                label="Fecha Final"
                value={newExperience.endDate}
                onChange={onChangeEndDate}
              />
            </Box>
            <TextField
              sx={textFieldStyles}
              id="description"
              multiline
              rows={4}
              label="Descripción"
              value={newExperience.description}
              onChange={onChangeDescription}
            />
          </Box>

          <Box sx={boxButtonStyles}>
            <Button sx={buttonStyle} type="submit">
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditExperienceModalContent;

interface Props {
  anExperience: Experience;
  className?: string;
}
