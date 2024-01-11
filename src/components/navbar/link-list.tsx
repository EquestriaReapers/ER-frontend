import { Box, Button, IconButton } from "@mui/material";
import { logout } from "core/auth/store/auth-slice";
import { User } from "core/users/types";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  inlineMobileStyles,
  inlineStyles,
  iconStyles,
  mobileTitleStyles,
} from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const LinkList = ({ user }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={inlineMobileStyles}>
      <Box sx={{ inlineStyles }}>
        <IconButton sx={iconStyles}>
          <HomeIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        <Link to="/home">
          <Button sx={mobileTitleStyles}>Home</Button>
        </Link>
      </Box>

      <Box sx={{ inlineStyles }}>
        <IconButton sx={iconStyles}>
          <AccountCircleIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        {!user ? (
          <Link to={`/login`}>
            <Button sx={mobileTitleStyles}>Login</Button>
          </Link>
        ) : (
          <Link to={`/profile/${user.id}`}>
            <Button sx={mobileTitleStyles}>Perfil</Button>
          </Link>
        )}
      </Box>

      <Box sx={{ inlineStyles }}>
        <IconButton sx={iconStyles}>
          <MenuBookIcon sx={{ fontSize: "20px" }} />
        </IconButton>
        <Link to={`/catalogue`}>
          <Button sx={mobileTitleStyles}>Catálogo</Button>
        </Link>
      </Box>

      {user && (
        <Box sx={{ inlineStyles }}>
          <IconButton sx={iconStyles}>
            <LogoutIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Button onClick={onLogout} sx={mobileTitleStyles}>
            Salir
          </Button>
        </Box>
      )}
      
    </Box>
  );
};

interface Props {
  user: User | null;
}
export default LinkList;
