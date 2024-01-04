import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Portfolio } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ClearIcon from "@mui/icons-material/Clear";
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
  fileNameStyles,
} from "./styles";
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useProjectFormState from "./use-project-form-state";
import dayjs, { Dayjs } from "dayjs";

const EditProjectModalContent = ({ project, className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);
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
    setImage,
    title,
    description,
    location,
    dateEnd,
    image,
    files,
    setFiles,
    onDragOver,
    onDrop,
    deleteFile,
  } = useProjectFormState();
  const getProjectInfo = useCallback(() => {
    setTitle(project.title);
    setDescription(project.description);
    setLocation(project.location);
    setDateEnd(toDateOrNull(project.dateEnd));
    setImage(project.image);
    setFiles(project.image);
  }, [
    project.title,
    project.description,
    project.location,
    project.dateEnd,
    project.image,
    setFiles,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
  ]);

  useEffect(() => {
    getProjectInfo();
  }, [getProjectInfo]);

  const projectState = { title, description, location, dateEnd, image };

  const projectId = project.id;

  const onSubmitForm = useForm({
    project: projectState,
    projectId,
  });

  const getFileName = (file: File) => {
    if (!file) return;
    if (file.name) return file.name;
    if (!file.name) return file;
  };

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(PortfolioContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar Proyecto</Typography>

        <Typography className="exp-show-description">
          Aquí podrás editar los datos de tu proyecto
        </Typography>
      </Box>

      <Box component="form" onSubmit={onSubmitForm}>
        <Box className="inputContainer" sx={{ mb: 2 }}>
          <TextField
            sx={textFieldStyles}
            id="title"
            label="Título"
            onChange={onTitleChange}
            value={title}
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
                  value={dateEnd}
                />
              </LocalizationProvider>
              <Box className="inputContainer pl-5px" sx={{ ml: 3 }}>
                <TextField
                  sx={textFieldStyles}
                  id="location"
                  label="Ubicación"
                  onChange={onLocationChange}
                  value={location}
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
            value={description}
          />
        </Box>

        <Box sx={uploadBoxStyles} component="form" onSubmit={onSubmitForm}>
          <Box sx={inputBoxStyles} onDragOver={onDragOver} onDrop={onDrop}>
            <Button
              component="label"
              disabled={files.length > 2}
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
          {files.length > 0 && (
            <>
              {files.map((file, index) => (
                <Box sx={fileListBoxStyles}>
                  <InsertDriveFileOutlinedIcon />
                  <Typography sx={fileNameStyles}>
                    {getFileName(file)!.slice(0, 35) +
                      " ... " +
                      getFileName(file)!.slice(-7)}
                  </Typography>

                  <IconButton onClick={() => deleteFile(index)}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              ))}
            </>
          )}
        </Box>
        <Box sx={boxButtonStyles}>
          <Button type="submit" sx={buttonStyle} className="exp-show-button">
            Guardar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProjectModalContent;

interface Props {
  project: Portfolio;
  className?: string;
}

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date);
  return null;
}
