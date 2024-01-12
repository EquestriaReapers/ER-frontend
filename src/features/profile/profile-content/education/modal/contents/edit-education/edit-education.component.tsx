import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Education } from "core/profiles/types";
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
  subTitleStyles,
} from "./styles";
import { EducationContent } from "../../education-modal-context/types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import EducationModalContext from "../../education-modal-context";
import useEducationFormState from "../use-education-form-state";
import { StyledBox, StyledButton } from "./edit-education.styled";

const DICTIONARY_SELECTED_BOOLEAN: Record<string, boolean> = {
  principal: true,
  complementaria: false,
};

const EditEducationModalContent = ({ anEducation, className }: Props) => {
  const { setContent } = useContext(EducationModalContext);
  const {
    onChangeTitle,
    onChangeEntity,
    onChangeEndDate,
    principal,
    title,
    entity,
    endDate,
    setPrincipal,
    setTitle,
    setEntity,
    setEndDate,
  } = useEducationFormState();

  const getEducationInfo = useCallback(() => {
    setPrincipal(anEducation.principal);
    setTitle(anEducation.title);
    setEntity(anEducation.entity);
    setEndDate(toDateOrNull(anEducation.endDate));
  }, [setTitle, setEntity, setEndDate, setPrincipal, anEducation]);

  useEffect(() => {
    getEducationInfo();
  }, [getEducationInfo]);

  const anEducationState = {
    principal,
    title,
    entity,
    endDate,
  };

  const educationId = anEducation.id;

  const onSubmitForm = useForm({
    anEducation: anEducationState,
    educationId,
  });

  const handleButtonClick = useCallback(
    (buttonType: string) => {
      if (principal === DICTIONARY_SELECTED_BOOLEAN[buttonType]) {
        setPrincipal(null);
      } else {
        setPrincipal(DICTIONARY_SELECTED_BOOLEAN[buttonType]);
      }
    },
    [principal, setPrincipal]
  );

  return (
    <Box sx={modalStyle} className={className}>
      <Box sx={headerStyles}>
        <Box>
          <IconButton onClick={() => setContent(EducationContent.Show)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography sx={titleStyles}>Editar educación</Typography>

        <Typography className="edu-show-description">
          Edita los datos de la educación profesional que quieres modificar
        </Typography>
      </Box>

      <Box component="form" onSubmit={onSubmitForm}>
        <Box>
          <Box className="inputContainer mt-5px" sx={{ marginBottom: 2 }}>
            <TextField
              sx={textFieldStyles}
              id="title"
              label="Titulo"
              value={title}
              onChange={onChangeTitle}
              disabled={anEducation.isUCAB}
            />
          </Box>
          <Box className="inputContainer mt-5px" sx={{ marginTop: 2 }}>
            <TextField
              sx={textFieldStyles}
              id="entity"
              label="Entidad"
              value={entity}
              onChange={onChangeEntity}
              disabled={anEducation.isUCAB}
            />
          </Box>
          <Box className="inputContainer mt-5px" sx={{ marginTop: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={textFieldStyles}
                label="Fecha de Finalización"
                value={endDate}
                onChange={onChangeEndDate}
                disabled={anEducation.isUCAB}
              />
            </LocalizationProvider>
          </Box>
          {anEducation.isUCAB == true && (
            <Box className="inputContainer mt-5px">
              <Typography sx={subTitleStyles}>Tipo de educación</Typography>
              <StyledBox>
                {anEducation.principal ? (
                  // Boton cambiar a complementaria
                  <StyledButton
                    className={principal === false ? "selected" : ""}
                    onClick={() => handleButtonClick("complementaria")}
                  >
                    Es secundaria
                  </StyledButton>
                ) : (
                  // Boton cambiar a principal
                  <StyledButton
                    className={principal === true ? "selected" : ""}
                    onClick={() => handleButtonClick("principal")}
                  >
                    Es principal
                  </StyledButton>
                )}
              </StyledBox>
            </Box>
          )}
        </Box>

        <Box sx={boxButtonStyles}>
          <Button sx={buttonStyle} type="submit">
            Guardar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditEducationModalContent;

interface Props {
  anEducation: Education;
  className?: string;
}

function toDateOrNull(date: string | Date | null): Dayjs | null {
  if (date) return dayjs(date);
  return null;
}
