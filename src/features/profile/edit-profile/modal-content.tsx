import { Box, Button, TextField, IconButton, Typography } from "@mui/material";
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
  const { name, description, onChangeName, onChangeDescription } =
    useEditProfileFormState();

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
          <TextField
            sx={textFieldStyles}
            id="name"
            value={name}
            label="Nombre"
            onChange={onChangeName}
          />
        </Box>
        <Box>
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
  className ?: string;
}

export default EditProfileModalContent;
