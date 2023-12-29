import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
//import ModalContent from "./modal-content";
import { useState } from "react";
import { modalStyle } from "./styles";

const EditCardContent = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <AddIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className={className} sx={modalStyle}>
          <Typography> lo logró señor lo abrio</Typography>
        </Box>
      </Modal>
    </div>
  );
};

interface Props {
  className?: string;
}

export default EditCardContent;
