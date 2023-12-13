import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { modalStyle } from "../../styles";
import FormContent from "./modal-content";
import { useState } from "react";
import { Skill } from "core/profiles/types";

const AddSkillsModal = ({ currentProfileSkills }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <AddIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={modalStyle}>
          <FormContent
            setIsOpen={setIsOpen}
            currentProfileSkills={currentProfileSkills}
          />
        </Box>
      </Modal>
    </div>
  );
};

export interface Props {
  currentProfileSkills: Skill[];
}

export default AddSkillsModal;
