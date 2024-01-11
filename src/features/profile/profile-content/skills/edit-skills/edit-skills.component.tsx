import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ModalContent from "./modal-content";
import { useState } from "react";
import SkillsModalContextProvider from "./skills-modal-context";
import { SkillType } from "core/skills/types";

const EditSkills = ({ skillType }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <AddIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <SkillsModalContextProvider skillType={skillType}>
          <ModalContent setIsOpen={setIsOpen} />
        </SkillsModalContextProvider>
      </Modal>
    </div>
  );
};

interface Props {
  className?: string;
  skillType: SkillType;
}

export default EditSkills;
