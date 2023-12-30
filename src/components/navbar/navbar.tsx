import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material/";
import { navbarStyles } from "./styles";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={navbarStyles} >
          <Link to="/"> 
            <Typography>Home</Typography>
          </Link>
          <Link to="/perfil"> 
            <Typography>Perfil</Typography>
          </Link>
          <Link to="/catalogo"> 
            <Typography>Catálogo</Typography>
          </Link>
          <Link to="/logout">
            <Typography>Logout</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
