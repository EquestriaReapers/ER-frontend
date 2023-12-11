import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  modalStyle,
  titleStyles,
  textFieldStyleA,
} from "../show-experiences/styles";
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

        <Box className={"single-typefield-box"}>
          <TextField
            id="role"
            label="Cargo / Puesto"
            onChange={onChangeRole}
            className={"enlargement-textfield"}
          />
        </Box>

        <Box className={"multiple-typefield-box"}>
          <Box className={"children-box"}>
            <TextField
              id="businessName"
              label="Empresa"
              onChange={onChangeBusinessName}
              sx={{ width: "100%" }}
            />
          </Box>

          <Box className={"last-children-box"}>
            <TextField
              id="location"
              label="Ubicación"
              onChange={onChangeLocation}
              className={"enlargement-textfield"}
            />
          </Box>
        </Box>

        <Box className={"multiple-typefield-box"}>
          <Box className={"children-box"}>
            <TextField
              id="startDate"
              label="Fecha Inicial"
              onChange={onChangeStartDate}
              className={"enlargement-textfield"}
            />
          </Box>

          <Box className={"last-children-box"}>
            <TextField
              id="endDate"
              label="Fecha Final"
              onChange={onChangeEndDate}
              className={"enlargement-textfield"}
            />
          </Box>
        </Box>

        <Box className={"single-typefield-box"}>
          <TextField
            id="description"
            multiline
            rows={4}
            label="Descripción"
            onChange={onChangeDescription}
            className={"enlargement-textfield"}
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
