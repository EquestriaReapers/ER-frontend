import { Button, Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { buttonStyle, titleStyles, subTitleStyles } from "../../../../styles";
import { descriptionStyles } from "./styles";
//import useProfileContext from "../../../../profile-context/use-profile-context";
import Ubicacion from "./location";
import Lenguaje from "./lenguage";
import Website from "./website";
import Email from "./email";

const ModalContent = ({ setIsOpen }: Props) => {
  const closeModal = useCloseModal(setIsOpen);

  return (
    <div>
      <Box sx={{ marginBottom: "32px" }}>
        <Typography sx={titleStyles}>Datos de contacto</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "48%" }}>
          <Typography sx={subTitleStyles}>Datos Generales</Typography>
          <Typography sx={descriptionStyles}>
            Estos datos básicos aparecerán en el perfil y en el CV
          </Typography>

          <Ubicacion />
          <Website />
          <Lenguaje />
        </Box>

        <Box sx={{ width: "48%" }}>
          <Typography sx={subTitleStyles}>Medios de contacto</Typography>
          <Typography sx={descriptionStyles}>
            Estos datos solo aparecerán en el CV
          </Typography>

          <Email />
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
