import { Box, IconButton } from "@mui/material/";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../logo.png";

const navBarMovile = ({ setIsOpen }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", width: "57%", justifyContent: "flex-end" }}>
        <Link to="/">
          <img src={Logo} alt="logo" width="70px" height="65px" />
        </Link>
      </Box>

      <Box sx={{ display: "flex", width: "43%", justifyContent: "flex-end" }}>
        <IconButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

export default navBarMovile;
