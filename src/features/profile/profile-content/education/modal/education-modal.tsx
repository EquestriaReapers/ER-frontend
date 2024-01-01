import { useContext, useState } from "react";
import { Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { EducationContent } from "./education-modal-context/types";
import { EducationContentManager } from "./contents/education-content-manager";
import EducationModalContext from "./education-modal-context";
import SpinnerAbsolute from "components/spinner-absolute";

const ExperiencesModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent, loading } = useContext(EducationModalContext);

  return (
    <div>
      <IconButton
        onClick={() => {
          setIsOpen(true);
          setContent(EducationContent.Show);
        }}
      >
        <EditIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <>
          {loading && <SpinnerAbsolute />}
          <EducationContentManager />
        </>
      </Modal>
    </div>
  );
};

export default ExperiencesModal;
