import { Box, AppBar, Toolbar, useMediaQuery } from "@mui/material/";
import { navbarStyles } from "./styles";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={navbarStyles}>
          {isMobile ? <Mobile /> : <Desktop />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
