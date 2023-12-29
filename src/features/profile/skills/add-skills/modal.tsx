import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { style } from "../styles/styles";
import FormContent from "./form-content";
import { useState } from "react";

const AddSkillsModal = () => {
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
        <Box sx={style}>
          <FormContent setIsOpen={setIsOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default AddSkillsModal;
