import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
} from "./styles";
import useExperienceFormState from "../use-experience-form-state";
import useAddExperienceForm from "./use-form";
import { ExperienceContent } from "../../experiencies-modal-context/types";
import { useContext } from "react";
import ExperiencesModalContext from "../../experiencies-modal-context";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { descriptionStyles } from "../../styles";

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
    isVisible,
  } = useExperienceFormState();

  const experience = {
    businessName,
    description,
    endDate,
    location,
    startDate,
    role,
    isVisible,
  };

  const { onSubmitForm } = useAddExperienceForm({ experience });

  return (
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(ExperienceContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Agregar experiencia</Typography>

        <Typography sx={descriptionStyles}>
          Escribe acerca de la experiencia profesional que quieres agregar
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
                onChange={onChangeRole}
              />
            </Box>

            <Box className="inputStyles">
              <Box className="inputContainer pr-5px">
                <TextField
                  sx={textFieldStyles}
                  id="businessName"
                  label="Empresa"
                  onChange={onChangeBusinessName}
                />
              </Box>

              <Box className="inputContainer pl-5px">
                <TextField
                  sx={textFieldStyles}
                  id="location"
                  label="Ubicación"
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
                    onChange={onChangeStartDate}
                  />
                </LocalizationProvider>
              </Box>
              <Box className="inputContainer pl-5px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={textFieldStyles}
                    label="Fecha Final"
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
                onChange={onChangeDescription}
              />
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type="submit" sx={buttonStyle} className="exp-show-button">
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

interface Props {
  className?: string;
}

export default AddExperienceModalContent;
