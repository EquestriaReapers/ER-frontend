import { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditProfileModalContent from "./modal-content";

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <IconButton onClick={openModal}>
        <EditIcon />
      </IconButton>

      <Modal open={isOpen} onClose={closeModal}>
        <div>
          <EditProfileModalContent setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
