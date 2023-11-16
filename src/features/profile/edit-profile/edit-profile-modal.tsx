import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Modal, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditIcon from "@mui/icons-material/Edit";
import useEditProfileFormState from "./use-edit-profile-form-state";
import { updateProfile } from "../services/profile.service";
import { useAuthState } from "hooks/use-auth-state";
import { modalStyle, VisuallyHiddenInput } from "./styles/styles";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { token, user } = useAuthState();

  const {
    name,
    email,
    description,
    onChangeName,
    onChangeEmail,
    onChangeImage,
    onChangeDescription,
  } = useEditProfileFormState();

  const onSubmitForm = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      if (token && user) {
        const data = await updateProfile(
          token,
          { name, email, description },
          user.id
        );
        console.log(data);
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
          <form
            onSubmit={() => {
              onSubmitForm;
            }}
          >
            <TextField
              id="name"
              value={name}
              label="Nombre"
              onChange={onChangeName}
            />

            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={onChangeEmail}
            />

            <TextField
              id="description"
              value={description}
              label="Descripción"
              onChange={onChangeDescription}
            />

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                id="fileInputElement"
                type="file"
                onChange={onChangeImage}
              />
            </Button>

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
