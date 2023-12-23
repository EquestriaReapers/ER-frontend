import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteSkillModalContent from "./modal-content";
import useDeleteSkill from "./use-delete-skill";

const DeleteSkillModal = ({ skillId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { onDeleteSkill } = useDeleteSkill({ skillId, setIsOpen });

  return (
    <div>
      <IconButton onClick={openModal}>
        <DeleteIcon />
      </IconButton>
      <Modal open={isOpen} onClose={closeModal}>
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

export interface Props {
  skillId: number;
}

export default DeleteSkillModal;
