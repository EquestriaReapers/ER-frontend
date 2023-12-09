import { useState } from "react";
import { Modal, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useModalContentChange from "./use-modal-content-change";
import { Experience } from "core/profiles/types";

const ExperienceModal = ({ experiences }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

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
        aria-labelledby="edit experiences"
        aria-describedby="used to edit e"
      >
        <div>
          <Button onClick={() => setContent(0)}>Mostrar exp</Button>
          <Button onClick={() => setContent(1)}>Agregar exp</Button>
          <Button onClick={() => setContent(2)}>Editar exp</Button>
          <Button onClick={() => setContent(3)}>Borrar exp</Button>

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
