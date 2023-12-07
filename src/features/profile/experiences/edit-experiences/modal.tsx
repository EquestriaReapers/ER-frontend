import { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditExperienceModalContent from "./modal-content";
import { Experience } from "core/profiles/types";

const EditExperienceModal = ({ experience }: EditExperienceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(1); // 1, 2, o 3 dependiendo del contenido que quieras mostrar

  const renderContent = () => {
    switch (content) {
      case 1:
        return (
          <EditExperienceModalContent setIsOpen={setIsOpen} experience={experience} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit experience"
        aria-describedby="used to edit e"
      >
        <div>{renderContent()}</div>
      </Modal>
    </div>
  );
};

interface EditExperienceModalProps {
  experience: Experience[];
}

export default EditExperienceModal;
