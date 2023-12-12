import { FormEvent, useState, useCallback, useEffect } from "react";
import { Box, Button, TextField, Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useEditProfileFormState from "./use-edit-profile-form-state";
import { useAuthState } from "hooks/use-auth-state";
import { modalStyle } from "./styles/styles";
import { updateProfile } from "../services/profile/update-profile.service";
import useGetProfileInfo from "./use-get-profile-info";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { token } = useAuthState();

  const {
    name,
    description,
    setName,
    setDescription,
    onChangeName,
    onChangeDescription,
  } = useEditProfileFormState();

  const { getUserInfo } = useGetProfileInfo({ setName, setDescription });

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !name || !description) return;
        const data = await updateProfile(token, { name, description });
        setIsOpen(false);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [description, name, token]
  );

  return (
    <div>
      <Button onClick={openModal}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
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
