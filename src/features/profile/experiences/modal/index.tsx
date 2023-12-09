import { useState } from "react";
import { Modal, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useModalContentChange from "./use-modal-content-change";
import { Experience } from "core/profiles/types";
import { ExperienceContent } from "./types";

const ExperienceModal = ({ experiences }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { setContent, renderContent } = useModalContentChange();
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
        <div>
          <div>{renderContent(experiences)}</div>
        </div>
      </Modal>
    </div>
  );
};

export interface Props {
  experiences: Experience[];
}

export default ExperienceModal;
