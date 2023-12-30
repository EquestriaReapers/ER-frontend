import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{ background: "white" }} position="static">
        <Toolbar>
        <Typography sx={{ color: "black", flexGrow: 1 }}>Si</Typography>
        
        <Button sx={{ mr: 2, color: "black" }}>Login</Button>
        </Toolbar>
    </AppBar>
    </Box>
);
};

export default Navbar;
