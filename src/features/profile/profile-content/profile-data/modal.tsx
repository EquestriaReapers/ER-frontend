import { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditProfileModalContent from "./modal-content.styled";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        sx={{
          height: { xs: "20px", sm: "40px" },
          width: { xs: "20px", sm: "40px" },
        }}
        onClick={() => setIsOpen(true)}
      >
        <EditIcon />
      </IconButton>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <EditProfileModalContent setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default EditProfileModal;
