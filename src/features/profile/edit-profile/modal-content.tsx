import { Box, Button, TextField } from "@mui/material";
import { modalStyle } from "./styles/styles";
import useEditProfileFormState from "./use-edit-profile-form-state";
import useOnSubmitForm from "./use-on-submit-form";

const EditProfileModalContent = ({ setIsOpen }: Props) => {
  const {
    name,
    description,
    mainTitle,
    onChangeName,
    onChangeDescription,
    onChangeMainTitle,
  } = useEditProfileFormState();

  const user = { name, description, mainTitle };
  const { onSubmitForm } = useOnSubmitForm({ setIsOpen, user });

  return (
    <Box sx={modalStyle}>
      <form onSubmit={onSubmitForm}>
        <TextField
          id="name"
          value={name}
          label="Nombre"
          onChange={onChangeName}
        />

        <TextField
          id="description"
          value={description}
          label="Descripción"
          onChange={onChangeDescription}
        />
        <TextField
          id="mainTitle"
          value={mainTitle}
          label="Titulo"
          onChange={onChangeMainTitle}
        />

        <Button variant="outlined" type="submit">
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

export default EditProfileModalContent;
