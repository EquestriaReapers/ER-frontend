import { Box, Typography } from "@mui/material";
import { FormTitleStyles } from "../styles";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";

const WebsiteContent = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
        <LanguageIcon className={"iconStyle"} />
        <Typography sx={FormTitleStyles}>Website</Typography>
      </Box>

      <TextField
        className={"fieldsStyle"}
        sx={{ width: "100%" }}
        id="web-page"
        label=""
        variant="outlined"
      />
    </div>
  );
};

export default WebsiteContent;
