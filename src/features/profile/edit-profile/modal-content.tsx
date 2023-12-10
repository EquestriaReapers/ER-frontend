import { Box, Button, TextField } from "@mui/material";
import { modalStyle } from "./styles/styles";
import useEditProfileFormState from "./use-edit-profile-form-state";
import useForm from "./use-form";

const EditProfileModalContent = ({
  setIsOpen,
}: Props) => {
  const {
    name,
    description,
    mainTitle,
    countryResidence,
    onChangeName,
    onChangeDescription,
    onChangeMainTitle,
    onChangeCountryResidence,
  } = useEditProfileFormState();

  const user = { name, description, mainTitle, countryResidence };
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

        <TextField
          id="mainTitle"
          value={mainTitle}
          label="Titulo"
          onChange={onChangeMainTitle}
        />

        <TextField
          id="countryResidence"
          value={countryResidence}
          label="Pais de Residencia"
          onChange={onChangeCountryResidence}
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
