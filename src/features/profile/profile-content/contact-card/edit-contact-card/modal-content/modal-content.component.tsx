import { Button, Box, Typography } from "@mui/material";
import { buttonStyle, titleStyles, subTitleStyles } from "../../../../styles";
import {
  descriptionStyles,
  boxContentStyles,
  emailBoxStyles,
  languageBoxStyles,
} from "./styles";
import Email from "./contact-methods";
import useContactCardContext from "../contact-card-context/use-contact-card-context";
import BasicDataForm from "./basic-data/basic-data-form";
import Language from "./lenguage";
import SpinnerAbsolute from "components/spinner-absolute";
import useUpdateContactModal from "./use-update-contact-modal";

const ModalContent = () => {
  const { basicData, setBasicData, loading } = useContactCardContext();
  const updateContactModal = useUpdateContactModal();

  return (
    <Box>
      {loading && <SpinnerAbsolute />}
      <Box sx={{ marginBottom: "32px" }}>
        <Typography sx={titleStyles}>Datos de contacto</Typography>
      </Box>

      <Box sx={boxContentStyles}>
        <Box sx={languageBoxStyles}>
          <Typography sx={subTitleStyles}>Datos Generales</Typography>
          <Typography sx={descriptionStyles}>
            Estos datos básicos aparecerán en tu perfil y CV
          </Typography>

          <BasicDataForm externalState={basicData} onChange={setBasicData} />
          <Language />
        </Box>
        <Box sx={emailBoxStyles}>
          <Typography sx={subTitleStyles}>Medios de contacto</Typography>
          <Typography sx={descriptionStyles}>
            Estos datos sólo aparecerán en tu CV
          </Typography>
          <Email />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={buttonStyle} onClick={updateContactModal}>
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  );
};

export default ModalContent;
