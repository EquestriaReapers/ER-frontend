import { Box, AppBar, Toolbar } from "@mui/material/";
import { navbarStyles } from "./styles";
import Desktop from "./desktop";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={navbarStyles}>
          <Desktop />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
