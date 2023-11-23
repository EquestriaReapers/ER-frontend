import { Box, Button, TextField } from "@mui/material";
import { modalStyle } from "./styles/styles";
import useEditProfileFormState from "./use-edit-profile-form-state";
import useForm from "./use-form";

const EditProfileModalContent = ({
  setIsOpen,
}: EditProfileModalContentProps) => {
  const { name, description, onChangeName, onChangeDescription } =
    useEditProfileFormState();

  const user = { name, description };
  const { onSubmitForm } = useForm({ setIsOpen, user });

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

        <Button variant="outlined" type="submit">
          Confirmar
        </Button>
      </form>
    </Box>
  );
};

export interface EditProfileModalContentProps {
  setIsOpen: (arg0: boolean) => void;
}

export default EditProfileModalContent;