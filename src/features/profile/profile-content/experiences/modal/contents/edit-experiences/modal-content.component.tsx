import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Experience } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useExperienceFormState from "../use-experience-form-state";
import useForm from "./use-form";
import { useCallback, useContext, useEffect } from "react";
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
} from "./styles";
import { ExperienceContent } from "../../experiences-modal-context/types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import ExperiencesModalContext from "../../experiences-modal-context";

const EditExperienceModalContent = ({ anExperience, className }: Props) => {
  const { setContent } = useContext(ExperiencesModalContext);
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

  const getExperienceInfo = useCallback(() => {
    setBusinessName(anExperience.businessName);
    setDescription(anExperience.description);
    setLocation(anExperience.location);
    setRole(anExperience.role);
    setEndDate(toDateOrNull(anExperience.endDate));
    setStartDate(toDateOrNull(anExperience.startDate));
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

  const anExperiencieState = {
    businessName,
    description,
    endDate,
    location,
    startDate,
    role,
  };

  const experienceId = anExperience.id;

  const onSubmitForm = useForm({
    anExperience: anExperiencieState,
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
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box className="inputContainer">
              <TextField
                sx={textFieldStyles}
                id="role"
                label="Cargo / Puesto"
                value={role}
                onChange={onChangeRole}
              />
            </Box>
            <Box className="inputStyles">
              <Box className="inputContainer pr-5px">
                <TextField
                  sx={textFieldStyles}
                  id="businessName"
                  label="Empresa"
                  value={businessName}
                  onChange={onChangeBusinessName}
                />
              </Box>
              <Box className="inputContainer pl-5px">
                <TextField
                  sx={textFieldStyles}
                  id="location"
                  label="Ubicación"
                  value={location}
                  onChange={onChangeLocation}
                />
              </Box>
            </Box>
            <Box className="inputStyles">
              <Box className="inputContainer pr-5px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={textFieldStyles}
                    label="Fecha Inicial"
                    value={startDate}
                    onChange={onChangeStartDate}
                  />
                </LocalizationProvider>
              </Box>
              <Box className="inputContainer pl-5px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={textFieldStyles}
                    label="Fecha Final"
                    value={endDate}
                    onChange={onChangeEndDate}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
            <Box className="inputContainer">
              <TextField
                sx={textFieldStyles}
                id="description"
                multiline
                rows={4}
                label="Descripción"
                value={description}
                onChange={onChangeDescription}
              />
            </Box>
          </Box>

          <Box sx={boxButtonStyles}>
            <Button sx={buttonStyle} type="submit" className="exp-show-button">
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

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date);
  return null;
}
