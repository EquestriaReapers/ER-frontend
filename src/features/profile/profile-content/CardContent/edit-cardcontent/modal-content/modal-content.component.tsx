import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import {
  buttonStyle,
  titleStyles,
  skillTitleStyle,
  descriptionStyles,
  subTitleStyles,
} from "../../../../styles";
import useProfileContext from "../../../../profile-context/use-profile-context";

const ModalContent = ({ setIsOpen }: Props) => {
  const { profile } = useProfileContext();
  const closeModal = useCloseModal(setIsOpen);

  return (
    <Box>
      <Typography sx={titleStyles}>Datos de contacto</Typography>
      <Typography sx={subTitleStyles}>Datos Generales</Typography>
      <Typography sx={descriptionStyles}>
        Estos datos básicos aparecerán en el perfil y en el CV
      </Typography>

      <Typography sx={skillTitleStyle}>Habilidades</Typography>
      <Button sx={buttonStyle} className="exp-show-button" onClick={closeModal}>
        Listo
      </Button>
    </Box>
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
