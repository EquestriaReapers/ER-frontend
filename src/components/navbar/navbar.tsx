import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  Drawer,
  List,
  Button,
  IconButton,
} from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";
import {
  inlineMobileStyles,
  titleStylesLogoutM,
  inlineStyles,
  iconStyles,
  titleMovileStyles,
} from "./styles";
import { useState } from "react";
import { navbarStyles } from "./styles";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "core/auth/store/auth-slice";
import { User } from "core/users/types";
import { AuthState } from "core/auth/store/types";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useCurrentUser();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const closeDrawer = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={navbarStyles}>
          {isMobile ? (
            <Mobile setIsOpen={setIsOpen} />
          ) : (
            <Desktop setIsOpen={setIsOpen} />
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
        <List>
          <Box sx={inlineMobileStyles}>
            <Box sx={{ inlineStyles }}>
              <IconButton sx={iconStyles}>
                <HomeIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              <Link to="/home">
                <Button sx={titleMovileStyles}>Home</Button>
              </Link>
            </Box>

            <Box sx={{ inlineStyles }}>
              <IconButton sx={iconStyles}>
                <AccountCircleIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              {user && (
                <Link to={`/profile/${user.id}`}>
                  <Button sx={titleMovileStyles}>Perfil</Button>
                </Link>
              )}
            </Box>

            <Box sx={{ inlineStyles }}>
              {!user && (
                <Link to={`/login`}>
                  <Button sx={titleMovileStyles}>Login</Button>
                </Link>
              )}
            </Box>

            <Box sx={{ inlineStyles }}>
              <IconButton sx={iconStyles}>
                <MenuBookIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              <Link to={`/catalogue`}>
                <Button sx={titleMovileStyles}>Catálogo</Button>
              </Link>
            </Box>

            <Box sx={{ inlineStyles }}>
              <IconButton sx={iconStyles}>
                <LogoutIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              {user && (
                <Button onClick={onLogout} sx={titleStylesLogoutM}>
                  Salir
                </Button>
              )}
            </Box>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}
