import { FormEvent, useState } from "react";
import { Box, Button, TextField, Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useEditProfileFormState from "./use-edit-profile-form-state";
import { updateProfile } from "../services/profile.service";
import { useAuthState } from "hooks/use-auth-state";
import { modalStyle } from "./styles/styles";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { token, user } = useAuthState();

  const { name, description, onChangeName, onChangeDescription } =
    useEditProfileFormState();

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (token && user) {
        console.log(token && user);
        const data = await updateProfile(token, { name, description }, user.id);
        setIsOpen(false)
        return data
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit profile"
        aria-describedby="used to edit profile"
      >
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
      </Modal>
    </div>
  );
};

export default EditProfileModal;