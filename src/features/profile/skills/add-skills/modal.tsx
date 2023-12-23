import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { style } from "../styles/styles";
import FormContent from "./form-content";
import { useState } from "react";

const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <IconButton onClick={openModal}>
        <AddIcon />
      </IconButton>

      <Modal open={isOpen} onClose={closeModal}>
        <Box sx={style}>
          <FormContent setIsOpen={setIsOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default AddSkillsModal;
