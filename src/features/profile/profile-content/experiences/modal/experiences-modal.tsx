import { useContext, useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ExperienceContent } from "./experiencies-modal-context/types";
import ExperiencesModalContext from "./experiencies-modal-context";
import { ExperiencesContentManager } from "./contents/experiences-content-manager";

const ExperiencesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent } = useContext(ExperiencesModalContext);

  return (
    <div>
      <IconButton
        onClick={() => {
          setIsOpen(true);
          setContent(ExperienceContent.Show);
        }}
      >
        <EditIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ExperiencesContentManager />
      </Modal>
    </div>
  );
};

export default ExperiencesModal;
