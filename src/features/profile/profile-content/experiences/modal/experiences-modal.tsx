import { useContext, useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ExperienceContent } from "./experiencies-modal-context/types";
import ExperiencesModalContext from "./experiencies-modal-context";
import { ExperiencesContentManager } from "./contents/experiences-content-manager";
import SpinnerAbsolute from "components/spinner-absolute";

const ExperiencesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent, loading } = useContext(ExperiencesModalContext);

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
        <>
          {loading && <SpinnerAbsolute />}
          <ExperiencesContentManager />
        </>
      </Modal>
    </div>
  );
};

export default ExperiencesModal;
