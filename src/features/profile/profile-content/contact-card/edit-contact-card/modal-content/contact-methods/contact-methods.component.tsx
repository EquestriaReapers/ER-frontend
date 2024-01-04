import { Box, Typography, TextField, Button } from "@mui/material";
import { FormTitleStyles, buttonStyle, textFieldBoxStyles } from "../styles";
import EmailIcon from "@mui/icons-material/Email";
import ContactCards from "./contact-cards";
import useAddContacthMethods from "./use-add-contact-method";
import useContactMethodFormState from "./use-contact-method-form-state";
import useProfileContext from "../../../../../profile-context/use-profile-context";

const ContactMethods = () => {
  const { profile } = useProfileContext();
  const { contactMethod, onChangeContactMethod, setContactMethod } =
    useContactMethodFormState();
  const addContactMethod = useAddContacthMethods();

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <EmailIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Agregar Correo de contacto</Typography>
      </Box>

      <Box sx={textFieldBoxStyles}>
        <TextField
          className={"fieldsStyle"}
          sx={{ width: "100%", marginRight: 1 }}
          onChange={onChangeContactMethod}
          id="web-page"
          label="Correo UCAB"
          variant="outlined"
        />
        <Button
          sx={buttonStyle}
          className="exp-show-button"
          onClick={() => {
            addContactMethod(contactMethod);
          }}
        >
          Agregar
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ContactCards contactMethods={profile.contactMethods} />
      </Box>
    </Box>
  );
};

export default ContactMethods;
