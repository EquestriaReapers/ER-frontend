import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Portfolio } from "core/profiles/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import PortfolioModalContext from "../../modal-context";
import { PortfolioContent } from "../../modal-context/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const EditProjectModalContent = ({ project, className }: Props) => {
  const { setContent } = useContext(PortfolioModalContext);

  const getProjectInfo = useCallback(() => {}, []);

  useEffect(() => {
    getProjectInfo();
  }, [getProjectInfo]);

  const projectState = {};

  const projectId = project.id;

  /*const onSubmitForm = useForm({
    project: projectState,
    projectId,
  }); */

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
      <Box>
        <form>
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

export default EditProjectModalContent;

interface Props {
  project: Portfolio;
  className?: string;
}
