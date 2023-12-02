import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteExperienceModalContent from "./modal-content";

const DeleteExperienceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="Delete Experience"
        aria-describedby="It is used to Experience skills"
      >
        <div>
          <DeleteExperienceModalContent setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  );
};


export default DeleteExperienceModal;
