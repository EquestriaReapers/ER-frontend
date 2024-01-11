import { useContext, useState } from "react";
import PortfolioModalContext from "./modal-context";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, IconButton } from "@mui/material";
import { PortfolioContent } from "./modal-context/types";
import { PortfolioContentManager } from "./contents/content-manager";
import SpinnerAbsolute from "components/spinner-absolute";

const PortfolioModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setContent, loading } = useContext(PortfolioModalContext);
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
        <>
          {loading && <SpinnerAbsolute />}
          <PortfolioContentManager />
        </>
      </Modal>
    </div>
  );
};

export default PortfolioModal;
