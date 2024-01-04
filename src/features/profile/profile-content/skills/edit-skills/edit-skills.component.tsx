import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ModalContent from "./modal-content";
import { useState } from "react";
import { modalStyle } from "./styles";
import SkillsModalContextProvider from "./skills-modal-context";
import { SkillType } from "core/skills/types";

const EditSkills = ({ className, skillType }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <AddIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className={className} sx={modalStyle}>
          <SkillsModalContextProvider skillType={skillType}>
            <ModalContent setIsOpen={setIsOpen} />
          </SkillsModalContextProvider>
        </Box>
      </Modal>
    </div>
  );
};

interface Props {
  className?: string;
  skillType: SkillType;
}

export default EditSkills;
