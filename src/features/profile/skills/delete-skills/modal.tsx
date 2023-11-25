import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteSkillModalContent from "./modal-content";
import useDeleteSkill from "./use-delete-skill";

const DeleteSkillModal = ({ skillId }: DeleteSkillProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { onDeleteSkill } = useDeleteSkill({ skillId, setIsOpen });

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="Delete Skills"
        aria-describedby="It is used to delete skills"
      >
        <div>
          <DeleteSkillModalContent
            onDeleteSkill={onDeleteSkill}
            setIsOpen={setIsOpen}
          />
        </div>
      </Modal>
    </div>
  );
};

export interface DeleteSkillProps {
  skillId: number;
}

export default DeleteSkillModal;
