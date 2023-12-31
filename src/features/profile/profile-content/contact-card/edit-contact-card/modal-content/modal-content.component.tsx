import { Button, Box, Typography } from "@mui/material";
import { buttonStyle, titleStyles, subTitleStyles } from "../../../../styles";
import { descriptionStyles } from "./styles";
import Email from "./contact-methods";
import useContactCardContext from "../contact-card-context/use-contact-card-context";
import BasicDataForm from "./basic-data/basic-data-form";
import useUpdateContactData from "./basic-data/use-update-basic-data";
import Language from "./lenguage";
import SpinnerAbsolute from "components/spinner-absolute";

const ModalContent = () => {
  const { basicData, setBasicData, loading } = useContactCardContext();
  const updateContactData = useUpdateContactData(basicData);

  return (
    <div>
      {loading && <SpinnerAbsolute />}
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

          <BasicDataForm externalState={basicData} onChange={setBasicData} />
          <Language />
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
          onClick={() => {
            //setIsOpen(false);
            updateContactData();
          }}
        >
          Guardar Cambios
        </Button>
      </Box>
    </div>
  );
};

export default ModalContent;
