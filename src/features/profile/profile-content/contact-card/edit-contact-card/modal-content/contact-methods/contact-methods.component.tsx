import { Box, Typography, TextField, Button } from "@mui/material";
import { FormTitleStyles, buttonStyle } from "../styles";
import EmailIcon from "@mui/icons-material/Email";
import ContactCards from "./contact-cards";
import { ContactMethod } from "core/profiles/types";
import useProfileContext from "../../../../../profile-context/use-profile-context";

const ContactMethods = () => {
  const { profile } = useProfileContext();

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <EmailIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Agregar Correo de contacto</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextField
          className={"fieldsStyle"}
          sx={{ width: "100%", marginRight: 1 }}
          id="web-page"
          label="Correo UCAB"
          variant="outlined"
        />
        <Button sx={buttonStyle} className="exp-show-button">
          Agregar
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ContactCards contactMethods={profile.contactMethods} />
      </Box>
    </Box>
  );
};

const mockMails: ContactMethod[] = [
  { email: "sexo 1@sexomail.com", id: 1 },
  { email: "sexo 2@sexomail.com", id: 2 },
  { email: "sexo 3@sexomail.com", id: 3 },
];

export default ContactMethods;
