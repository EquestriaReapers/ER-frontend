import { Box, IconButton } from "@mui/material/";
import SvgComponent from "../SvgComponent";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
          <SvgComponent />
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
