import { Box, Button, TextField, Typography } from "@mui/material";
import {
  modalStyle,
  buttonStyle,
  boxButtonStyles,
  textFieldStyles,
  headerStyles,
  titleStyles,
} from "./styles";
import useEditProfileFormState from "./use-edit-profile-form-state";
import useOnSubmitForm from "./use-on-submit-form";

const EditProfileModalContent = ({ setIsOpen, className }: Props) => {
  const {
    name,
    description,
    mainTitle,
    lastname,
    onChangeName,
    onChangeDescription,
    onChangeLastname,
    onChangeMainTitle,
  } = useEditProfileFormState();

  const user = { name, description };
  const { onSubmitForm } = useOnSubmitForm({ setIsOpen, user });

  return (
    <Box className={className} sx={modalStyle}>
      <Box sx={headerStyles}>
        <Typography sx={titleStyles}>Datos de Perfil</Typography>

        <Typography>
          Puedes editar los datos de tu perfil en esta sección
        </Typography>
      </Box>
      <form onSubmit={onSubmitForm}>
        <Box>
          <Box className="inputContainer">
            <TextField
              sx={textFieldStyles}
              id="name"
              value={name}
              label="Nombre"
              onChange={onChangeName}
            />
          </Box>
        </Box>
        <Box>
          <Box className="inputContainer">
            <TextField
              sx={textFieldStyles}
              id="lastname"
              value={lastname}
              label="Apellido"
              onChange={onChangeLastname}
            />
          </Box>
        </Box>
        <Box>
          <Box className="inputContainer">
            <TextField
              sx={textFieldStyles}
              id="mainTitle"
              value={mainTitle}
              label="Titulación"
              onChange={onChangeMainTitle}
            />
          </Box>
        </Box>
        <Box>
          <Box className="inputContainer">
            <TextField
              sx={textFieldStyles}
              id="description"
              value={description}
              label="Descripción"
              multiline
              rows={4}
              onChange={onChangeDescription}
            />
          </Box>
        </Box>

        <Box sx={boxButtonStyles}>
          <Button sx={buttonStyle} type="submit">
            Confirmar
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
