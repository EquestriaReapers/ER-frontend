import { Box, Typography, TextField } from "@mui/material";
import { FormTitleStyles, boxContentStyles, iconTextStyles,textfieldStyles } from "../styles";
import TranslateIcon from "@mui/icons-material/Translate";

const Lenguage = () => {
  return (
    <div>
      <Box sx={iconTextStyles}>
        <TranslateIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Idioma</Typography>
      </Box>

      <Box sx={boxContentStyles}>
        <TextField
          className={"fieldsStyle"}
          sx={textfieldStyles}
          id="web-page"
          label="idioma"
          variant="outlined"
        />

        <TextField
          className={"fieldsStyle"}
          id="web-page"
          label="nivel"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default Lenguage;
