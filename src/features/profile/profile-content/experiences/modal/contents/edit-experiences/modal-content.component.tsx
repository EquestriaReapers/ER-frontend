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
import useProfileContext from "features/profile/profile-context/use-profile-context";


import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import esLocale from "date-fns/locale/es";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { Dayjs } from "dayjs";

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
  const { fetchProfile } = useProfileContext();
  const startDateValue = startDate ? startDate : new Date();

  const [value, setValue] = React.useState<Dayjs | null>(null); //cosas del DatePicker

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
    fetchProfile
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
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box className="inputContainer">
              <TextField
                sx={textFieldStyles}
                id="role"
                label="Cargo / Puesto"
                value={newExperience.role}
                onChange={onChangeRole}
              />
            </Box>
            <Box className="inputStyles">
              <Box className="inputContainer pr-5px">
                <TextField
                  sx={textFieldStyles}
                  id="businessName"
                  label="Empresa"
                  value={newExperience.businessName}
                  onChange={onChangeBusinessName}
                />
              </Box>
              <Box className="inputContainer pl-5px">
                <TextField
                  sx={textFieldStyles}
                  id="location"
                  label="Ubicación"
                  value={newExperience.location}
                  onChange={onChangeLocation}
                />
              </Box>
            </Box>
            <Box className="inputStyles">
              <Box className="inputContainer pr-5px">
                <TextField
                  sx={textFieldStyles}
                  id="startDate"
                  label="Fecha Inicial"
                  value={newExperience.startDate}
                  onChange={onChangeStartDate}
                />
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={esLocale}
                >
                  <DatePicker
                    sx={textFieldStyles}
                    label="Fecha Inicial"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box className="inputContainer pl-5px">
                <TextField
                  sx={textFieldStyles}
                  id="endDate"
                  label="Fecha Final"
                  value={newExperience.endDate}
                  onChange={onChangeEndDate}
                />
              </Box>
            </Box>
            <Box className="inputContainer">
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
