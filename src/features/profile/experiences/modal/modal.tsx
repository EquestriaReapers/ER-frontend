import { useState } from "react";
import { Modal, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useModalContentChange from "./use-modal-content-change";

const EditExperienceModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent, renderContent } = useModalContentChange();
  return (
    <div>
      <IconButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="edit experience"
        aria-describedby="used to edit e"
      >
        <div>
          <Button onClick={() => setContent(0)}>Mostrar exp</Button>
          <Button onClick={() => setContent(1)}>Agregar exp</Button>
          <Button onClick={() => setContent(2)}>Editar exp</Button>
          <Button onClick={() => setContent(3)}>Borrar exp</Button>

          <div>{renderContent()}</div>
        </div>
      </Modal>
    </div>
  );
};

export default EditExperienceModal;
