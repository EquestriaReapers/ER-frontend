import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Portfolio } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import useForm from "./use-form";
import { useCallback, useContext, useEffect } from "react";
import {
  boxButtonStyles,
  headerStyles,
  textFieldStyles,
  modalStyle,
  titleStyles,
  buttonStyle,
  fileListBoxStyles,
  inputDescriptionStyles,
  uploadBoxStyles,
  inputBoxStyles,
  uploadButtonStyles,
} from "./styles";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useProjectFormState from "./use-project-form-state";
import dayjs, { Dayjs } from "dayjs";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import ImageCard from "./image-card";

const EditProjectModalContent = ({ project }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
  const { fetchProfile } = useProfileContext();
  const {
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    deletedImages,
    title,
    newFiles,
    description,
    location,
    dateEnd,
    previousImages,
    setImage,
    onDragOver,
    onDrop,
    deleteFile,
  } = useProjectFormState();

  const getProjectInfo = useCallback(() => {
    setTitle(project.title);
    setDescription(project.description);
    setLocation(project.location);
    setDateEnd(toDateOrNull(project.dateEnd));
    const _projectImages = project.image || [];
    setImage(_projectImages);
  }, [
    setTitle,
    project.title,
    project.description,
    project.location,
    project.dateEnd,
    project.image,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
  ]);

  useEffect(() => {
    getProjectInfo();
  }, [getProjectInfo]);

  const projectState = {
    title,
    description,
    location,
    dateEnd,
    newFiles,
  };
  const projectId = project.id;

  const onSubmitForm = useForm({
    project: projectState,
    projectId,
    deletedImages,
    newFiles,
  });

  return (
    <Box sx={modalStyle}>
      <Box sx={{ mx: "40px", mb: "40px", mt: "20px" }}>
        <Box sx={headerStyles}>
          <IconButton
            sx={{ ml: "-10px" }}
            onClick={async () => {
              setContent(PortfolioContent.Show);
              await fetchProfile();
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography sx={titleStyles}>Editar Proyecto</Typography>

          <Typography>Aquí podrás editar los datos de tu proyecto</Typography>
        </Box>

        <Box
          component="form"
          onSubmit={onSubmitForm}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "20px",
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
              <TextField
                sx={textFieldStyles}
                id="title"
                label="Título"
                onChange={onTitleChange}
                value={title}
              />

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
                      value={dateEnd}
                    />
                  </LocalizationProvider>
                </Box>

                <Box sx={{ display: "flex", width: { xs: "100%", sm: "50%" } }}>
                  <TextField
                    sx={textFieldStyles}
                    id="location"
                    label="Ubicación"
                    onChange={onLocationChange}
                    value={location}
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
                value={description}
              />
            </Box>

            <Box sx={uploadBoxStyles}>
              <Box sx={inputBoxStyles} onDragOver={onDragOver} onDrop={onDrop}>
                <Button
                  component="label"
                  disabled={previousImages.length >= 3}
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
                {previousImages.length > 0 && (
                  <>
                    {previousImages.map((previousImage, index) => (
                      <>
                        <ImageCard
                          key={index}
                          image={previousImage}
                          deleteFile={deleteFile}
                        />
                      </>
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

export default EditProjectModalContent;

interface Props {
  project: Portfolio;
}

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date);
  return null;
}
