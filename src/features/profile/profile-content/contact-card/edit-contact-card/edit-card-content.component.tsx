import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
//import ModalContent from "./modal-content";
import { useState } from "react";
import { modalStyle } from "./styles";
import ModalContent from "./modal-content/modal-content.component";
import ContactCardContextProvider from "./contact-card-context/ContactCardContextProvider";

const EditContactCard = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: "flex", width: "24px", height: "24px" }}>
      <IconButton sx={{ width: "24px" }} onClick={() => setIsOpen(true)}>
        <EditIcon sx={{ fontSize: "24px" }} />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className={className} sx={modalStyle}>
          <ContactCardContextProvider isOpen={isOpen} setIsOpen={setIsOpen}>
            <ModalContent />
          </ContactCardContextProvider>
        </Box>
      </Modal>
    </div>
  );
};

interface Props {
  className?: string;
}

export default EditContactCard;
