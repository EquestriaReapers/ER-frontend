import { useState } from "react";
import { Modal, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useModalContentChange from "./use-modal-content-change";
import { Experience } from "core/profiles/types";

const ExperienceModal = ({ experiencies }: ExperienceModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(experiencies);
  const { setContent, renderContent } = useModalContentChange();
  return (
    <div>
      <IconButton
        onClick={() => {
          setIsOpen(true);
          setContent(0);
        }}
      >
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit experiencies"
        aria-describedby="used to edit e"
      >
        <div>
          <Button onClick={() => setContent(0)}>Mostrar exp</Button>
          <Button onClick={() => setContent(1)}>Agregar exp</Button>
          <Button onClick={() => setContent(2)}>Editar exp</Button>
          <Button onClick={() => setContent(3)}>Borrar exp</Button>

          <div>{renderContent(experiencies)}</div>
        </div>
      </Modal>
    </div>
  );
};

export interface ExperienceModalProps {
  experiencies: Experience[];
}

export default ExperienceModal;
