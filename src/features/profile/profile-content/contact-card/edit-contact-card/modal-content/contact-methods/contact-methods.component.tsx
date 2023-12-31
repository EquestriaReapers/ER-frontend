import { Box, Typography, TextField, Button } from "@mui/material";
import { FormTitleStyles, buttonStyle } from "../styles";
import EmailIcon from "@mui/icons-material/Email";

const ContactMethods = () => {
  return (
    <div>
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
          sx={{ width: "70%" }}
          id="web-page"
          label=""
          variant="outlined"
        />
        <Button sx={buttonStyle} className="exp-show-button">
          Buscar
        </Button>
      </Box>
    </div>
  );
};

export default ContactMethods;
