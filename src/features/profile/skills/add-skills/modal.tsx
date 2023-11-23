import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { style } from "../styles/styles";
import FormContent from "./form-content";
import { useState } from "react";

const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="agregar habilidades"
        aria-describedby="se usa para agregar habilidades"
      >
        <Box sx={style}>
          <FormContent setIsOpen={setIsOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default AddSkillsModal;
