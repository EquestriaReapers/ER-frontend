import { Box, Typography, TextField } from "@mui/material";
import { FormTitleStyles } from "../styles";
import TranslateIcon from "@mui/icons-material/Translate";

const Lenguage = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <TranslateIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Idioma</Typography>
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
          sx={{ width: "65%" }}
          id="web-page"
          label=""
          variant="outlined"
        />

        <TextField
          className={"fieldsStyle"}
          sx={{ width: "25%" }}
          id="web-page"
          label=""
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default Lenguage;
