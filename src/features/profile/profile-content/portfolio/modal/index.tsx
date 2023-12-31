import { useContext, useState } from "react";
import PortfolioModalContext from "./modal-context";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, IconButton } from "@mui/material";
import { PortfolioContent } from "./modal-context/types";
import { PortfolioContentManager } from "./contents/content-manager";

const PortfolioModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent } = useContext(PortfolioModalContext);
  return (
    <div>
      <IconButton
        onClick={() => {
          setIsOpen(true);
          setContent(PortfolioContent.Show);
        }}
      >
        <EditIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <PortfolioContentManager />
      </Modal>
    </div>
  );
};

export default PortfolioModal;
