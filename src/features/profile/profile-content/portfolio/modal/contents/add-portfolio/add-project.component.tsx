import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
} from "./styles";

import { useContext, useState } from "react";

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

  const [files, setFiles] = useState<File[]>([]);

  const onDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: FileList };
  }) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;

    setFiles((prevFiles) => [
      ...prevFiles,
      ...Array.from(droppedFiles) as File[],
    ]);
  };

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
                  <Box className="" sx={{ display: "flex", mb: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{ textFieldStyles }}
                        label="Fecha Final"
                        onChange={onDateEndChange}
                      />
                    </LocalizationProvider>
                    <Box className="inputContainer pl-5px" sx={{ ml: 3 }}>
                      <TextField
                        sx={textFieldStyles}
                        id="location"
                        label="Ubicación"
                        onChange={onLocationChange}
                      />
                    </Box>
                  </Box>
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
            <Box
              border="2px dashed #ccc"
              borderRadius="8px"
              p={2}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              onDragOver={onDragOver}
              onDrop={onDrop}
            >
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={onImageChange}
              />
              <CloudUploadIcon fontSize="large" color="primary" />
              <Typography variant="subtitle1" color="textSecondary">
                Arrastra y sube tus archivos
              </Typography>
              <Button color="primary" component="label">
                Subir Archivo
                <input
                  type="file"
                  multiple
                  style={{ display: "none" }}
                  onChange={onImageChange}
                />
              </Button>

              {files!.length > 0 && (
                <Typography variant="body2" color="textSecondary" mt={2}>
                  Archivos seleccionados:
                  {files!.map((file) => file.name).join(", ")}
                </Typography>
              )}
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
