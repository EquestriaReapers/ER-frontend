import { Box, IconButton } from "@mui/material/";
//import SvgComponent from "../SvgComponent";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../logo.png";

const NavBarMovile = ({ setIsOpen }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ width: "42%" }}>
        <IconButton
          onClick={() => {
            setIsOpen(true);
          }}
          sx={{
            display: "flex",
            height: "40px",
            width: "40px",
            justifyContent: "flex-start",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/*
            <Box sx={{ width: "58%" }}>
        <Link to="/">
          <SvgComponent />
        </Link>
      </Box>*/}
      <Box sx={{ width: "58%" }}>
        <Link to="/">
          <img src={Logo} alt="logo" width="70px" height="65px" />
        </Link>
      </Box>
    </Box>
  );
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

export default NavBarMovile;
