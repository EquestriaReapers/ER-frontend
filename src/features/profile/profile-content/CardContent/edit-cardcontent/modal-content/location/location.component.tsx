import { Button, Box, Typography } from "@mui/material";
import { FormTitleStyles } from "../styles";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const UbicacionContent = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FmdGoodIcon
          sx={{
            fontSize: "16px",
          }}
        />
        <Typography sx={FormTitleStyles}>Ubicación</Typography>
      </Box>
    </div>
  );
};

export default UbicacionContent;
