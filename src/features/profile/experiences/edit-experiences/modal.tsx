import { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditExperienceModalContent from "../modal/edit-experiences/modal-content";
import { Experience } from "core/profiles/types";
import { modalStyle } from "../modal/styles/styles";

const EditExperienceModal = ({ experience }: EditExperienceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <IconButton onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit experience"
        aria-describedby="used to edit e"
      >
        <Box>
          <EditExperienceModalContent
            experience={experience}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Modal>
    </Box>
  );
};

interface EditExperienceModalProps {
  experience: Experience[];
}

export default EditExperienceModal;
