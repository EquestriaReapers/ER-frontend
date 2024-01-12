import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
  uploadBoxStyles,
  inputBoxStyles,
  uploadButtonStyles,
  fileListBoxStyles,
  inputDescriptionStyles,
} from "./styles";

import { useContext } from "react";

import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useProjectState from "./use-project-form-state";
import useAddProjectForm from "./use-form";
import ImageCard from "./image-card";

const AddPortfolioModalContent = ({ className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const {
    title,
    description,
    location,
    dateEnd,
    newFiles,
    url,
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    onUrlChange,
    deleteFile,
    onDragOver,
    onDrop,
  } = useProjectState();

  const project = {
    title,
    description,
    location,
    dateEnd,
    newFiles,
    url,
  };
  const onSubmitForm = useAddProjectForm({ project });

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={{ mx: "40px", mb: "40px", mt: "20px" }}>
        <Box sx={headerStyles}>
          <IconButton
            sx={{ ml: "-10px" }}
            onClick={async () => {
              setContent(PortfolioContent.Show);
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography sx={titleStyles}>Agregar Proyecto</Typography>

          <Typography className="exp-show-description">
            Aquí podrás agregar un proyecto a tu portafolio
          </Typography>
        </Box>

        <Box component="form" onSubmit={onSubmitForm}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "20px",
                }}
              >
                <Box sx={{ display: "flex", width: { xs: "100%", sm: "50%" } }}>
                  <TextField
                    sx={textFieldStyles}
                    id="title"
                    label="Título"
                    onChange={onTitleChange}
                  />
                </Box>

                <Box sx={{ display: "flex", width: { xs: "100%", sm: "50%" } }}>
                  <TextField
                    sx={textFieldStyles}
                    id="url"
                    label="Link"
                    onChange={onUrlChange}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "20px",
                }}
              >
                <Box sx={{ display: "flex", width: { xs: "100%", sm: "50%" } }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={textFieldStyles}
                      label="Fecha Final"
                      onChange={onDateEndChange}
                    />
                  </LocalizationProvider>
                </Box>

                <Box sx={{ display: "flex", width: { xs: "100%", sm: "50%" } }}>
                  <TextField
                    sx={textFieldStyles}
                    id="location"
                    label="Ubicación"
                    onChange={onLocationChange}
                  />
                </Box>
              </Box>

              <TextField
                sx={textFieldStyles}
                id="description"
                multiline
                rows={4}
                label="Descripción"
                onChange={onDescriptionChange}
              />
            </Box>

            <Box sx={uploadBoxStyles}>
              <Box sx={inputBoxStyles} onDragOver={onDragOver} onDrop={onDrop}>
                <Button
                  component="label"
                  disabled={newFiles.length >= 3}
                  sx={uploadButtonStyles}
                >
                  <Typography sx={inputDescriptionStyles}>
                    Arrastra y sube tus archivos acá
                  </Typography>
                  <AddPhotoAlternateOutlinedIcon />
                  <input
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png"
                    style={{ display: "none" }}
                    onDragOver={onDragOver}
                    onChange={onImageChange}
                  />
                </Button>
              </Box>
              <Box sx={fileListBoxStyles}>
                {newFiles.length > 0 && (
                  <>
                    {newFiles.map((image) => (
                      <ImageCard
                        key={image.name}
                        image={image}
                        deleteFile={deleteFile}
                      />
                    ))}
                  </>
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={boxButtonStyles}>
            <Button type="submit" sx={buttonStyle}>
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface Props {
  className?: string;
}

export default AddPortfolioModalContent;
