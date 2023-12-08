import { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditExperienceModalContent from "./modal-content";
import { Experience } from "core/profiles/types";

const EditExperienceModal = ({ experience }: EditExperienceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div>
          <EditExperienceModalContent
            experience={experience}
            setIsOpen={setIsOpen}
          />
        </div>
      </Modal>
    </div>
  );
};

interface EditExperienceModalProps {
  experience: Experience[];
}

export default EditExperienceModal;
