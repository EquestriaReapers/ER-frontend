import { Box, Button, TextField, Typography } from "@mui/material";
import {
  modalStyle,
  buttonStyle,
  boxButtonStyles,
  textFieldStyles,
  headerStyles,
  titleStyles,
  infoStyles,
  descriptionStyles,
} from "./styles";
import useEditProfileFormState from "./use-edit-profile-form-state";
import useOnSubmitForm from "./use-on-submit-form";
import useProfileContext from "../../profile-context/use-profile-context";
import SpinnerAbsolute from "components/spinner-absolute";

const EditProfileModalContent = ({ setIsOpen, className }: Props) => {
  const { profile } = useProfileContext();

  const {
    loaded,
    name,
    description,
    lastname,
    onChangeName,
    onChangeDescription,
    onChangeLastname,
  } = useEditProfileFormState(profile);

  const user = { name, description, lastname };
  const { onSubmitForm, loading } = useOnSubmitForm({ setIsOpen, user });

  if (!loaded) return null;

  return (
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Typography sx={titleStyles}>Datos de Perfil</Typography>

        <Typography sx={descriptionStyles}>
          Puedes editar los datos de tu perfil en esta sección
        </Typography>
      </Box>
      <form onSubmit={onSubmitForm} autoComplete="off">
        {loading && <SpinnerAbsolute />}
        <Box className="inputStyles">
          <Box className="inputContainer pr-5px">
            <TextField
              disabled={loading}
              sx={textFieldStyles}
              value={name}
              label="Nombre"
              autoComplete="off"
              onChange={onChangeName}
            />
          </Box>
          <Box className="inputContainer pl-5px">
            <TextField
              disabled={loading}
              sx={textFieldStyles}
              value={lastname}
              label="Apellido"
              autoComplete="off"
              onChange={onChangeLastname}
            />
          </Box>
        </Box>
        <Box>
          <Box className="inputContainer">
            <TextField
              disabled={loading}
              sx={textFieldStyles}
              value={description}
              label="Sobre mi"
              multiline
              rows={4}
              autoComplete="off"
              onChange={onChangeDescription}
            />
          </Box>
        </Box>
        <Box sx={infoStyles}>
          <Typography sx={descriptionStyles}>
            Sólo se mostrarán 140 palabras en tu perfil, luego tendrás que darle
            a "leer más"
          </Typography>
        </Box>
        <Box sx={boxButtonStyles}>
          <Button
            sx={buttonStyle}
            disabled={loading}
            className="exp-show-button"
            type="submit"
          >
            Guardar Cambios
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
}

export default EditProfileModalContent;
