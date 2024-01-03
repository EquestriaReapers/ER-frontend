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

import { useContext } from "react";

import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { descriptionStyles } from "../edit-portfolio/styles";
import useProjectState from "./use-project-form-state";
import useAddProjectForm from "./use-form";

const AddPortfolioModalContent = ({ className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const {
    title,
    description,
    location,
    dateEnd,
    image,
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
  } = useProjectState();

  const project = {
    title,
    description,
    location,
    dateEnd,
    image,
  };
  const onSubmitForm = useAddProjectForm({ project });

  return (
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(PortfolioContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Agregar Proyecto</Typography>

        <Typography sx={descriptionStyles}>
          Aquí podrás agregar un proyecto a tu portafolio
        </Typography>
      </Box>
      <Box>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Box>
              <Box className="inputContainer" sx={{ mb: 2 }}>
                <TextField
                  sx={textFieldStyles}
                  id="title"
                  label="Título"
                  onChange={onTitleChange}
                />
              </Box>
              <Box className="inputStyles">
                <Box className="inputStyles">
                  <Box className="inputContainer pl-5px" sx={{ mb: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={textFieldStyles}
                        label="Fecha Final"
                        onChange={onDateEndChange}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <Box className="inputContainer pl-5px" sx={{ mb: 2 }}>
                  <TextField
                    sx={textFieldStyles}
                    id="location"
                    label="Ubicación"
                    onChange={onLocationChange}
                  />
                </Box>
              </Box>

              <Box className="inputContainer" sx={{ mb: 2 }}>
                <TextField
                  sx={textFieldStyles}
                  id="description"
                  multiline
                  rows={4}
                  label="Descripción"
                  onChange={onDescriptionChange}
                />
              </Box>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Button>
                <input type="file" onChange={onImageChange} multiple />
              </Button>
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

export default AddPortfolioModalContent;
