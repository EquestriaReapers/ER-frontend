import { FormEvent, useState, useCallback, useEffect } from "react";
import { Box, Button, TextField, Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useEditProfileFormState from "./use-edit-profile-form-state";
import { useAuthState } from "hooks/use-auth-state";
import { modalStyle } from "./styles";
import { updateProfile } from "../services/profile/update-profile.service";
import useGetProfileInfo from "./use-get-profile-info";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { token } = useAuthState();

  const {
    name,
    lastname,
    setName,
    mainTitle,
    description,
    setLastname,
    setMainTitle,
    setDescription,
    onChangeName,
    onChangeLastname,
    onChangeMainTitle,
    onChangeDescription,
  } = useEditProfileFormState();

  const { getUserInfo } = useGetProfileInfo({
    setName,
    setLastname,
    setMainTitle,
    setDescription,
  });

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (!token || !name || !description || !lastname || !mainTitle) return;
        const data = await updateProfile(token, {
          name,
          description,
          mainTitle,
          lastname,
        });
        setIsOpen(false);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [description, name, setMainTitle, setLastname, token]
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
              id="lastname"
              value={lastname}
              label="Apellido"
              onChange={onChangeLastname}
            />
            <TextField
              id="mainTitle"
              value={mainTitle}
              label="Titulación"
              onChange={onChangeMainTitle}
            />
            <TextField
              id="description"
              value={description}
              label="Descripción"
              onChange={onChangeDescription}
            />

            <Button type="submit">Confirmar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
