import {
  Box,
  AppBar,
  Toolbar,
  useMediaQuery,
  Drawer,
  List,
  Button,
} from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";
import { titleStyles, inlineMobileStyles, titleStylesLogoutM } from "./styles";
import { useState } from "react";
import { navbarStyles } from "./styles";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "core/auth/store/auth-slice";
import { User } from "core/users/types";
import { AuthState } from "core/auth/store/types";

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
            <Link to="/home">
              <Button sx={titleStyles}>Home</Button>
            </Link>
            {user && (
              <Link to={`/profile/${user.id}`}>
                <Button sx={titleStyles}>Perfil</Button>
              </Link>
            )}
            {!user && (
              <Link to={`/login`}>
                <Button sx={titleStyles}>Login</Button>
              </Link>
            )}
            {!user && (
              <Link to={`/register`}>
                <Button sx={titleStyles}>Registro</Button>
              </Link>
            )}
            <Link to={`/catalogue`}>
              <Button sx={titleStyles}>Catálogo</Button>
            </Link>
            {user && (
              <Button onClick={onLogout} sx={titleStylesLogoutM}>
                Salir
              </Button>
            )}
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
