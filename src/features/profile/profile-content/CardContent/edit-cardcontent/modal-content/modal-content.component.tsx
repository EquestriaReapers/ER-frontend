import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import {
  buttonStyle,
  titleStyles,
  descriptionStyles,
  subTitleStyles,
} from "../../../../styles";
import useProfileContext from "../../../../profile-context/use-profile-context";
import Ubicacion from "./location";
import Lenguaje from "./lenguage";
import Website from "./Website";

const ModalContent = ({ setIsOpen }: Props) => {
  const closeModal = useCloseModal(setIsOpen);

  return (
    <div>
      <Box sx={{ marginBottom: "32px" }}>
        <Typography sx={titleStyles}>Datos de contacto</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginRight: "10px" }}>
          <Typography sx={subTitleStyles}>Datos Generales</Typography>
          <Typography sx={descriptionStyles}>
            Estos datos básicos aparecerán en el perfil y en el CV
          </Typography>
          <Ubicacion />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={buttonStyle}
          className="exp-show-button"
          onClick={closeModal}
        >
          Guardar Cambios
        </Button>
      </Box>
    </div>
  );
};

function useCloseModal(setIsOpen: (open: boolean) => void) {
  return useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
}

export interface Props {
  setIsOpen: (open: boolean) => void;
}

export default ModalContent;
