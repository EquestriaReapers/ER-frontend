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
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(ExperienceContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Agregar experiencia</Typography>

        <Typography>
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
                <TextField
                  sx={textFieldStyles}
                  id="startDate"
                  label="Fecha Inicial"
                  onChange={onChangeStartDate}
                />
              </Box>
              <Box className="inputContainer pl-5px">
                <TextField
                  sx={textFieldStyles}
                  id="endDate"
                  label="Fecha Final"
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
                onChange={onChangeDescription}
              />
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type="submit" sx={buttonStyle}>
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
