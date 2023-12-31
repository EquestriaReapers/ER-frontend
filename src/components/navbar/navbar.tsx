import { Toolbar, Box, AppBar, Button } from "@mui/material/";
import { navbarStyles, titleStyles, inlineStyles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "core/auth/store/types";
import { User } from "core/users/types";
import useRedirectWhenUnlogged from "hooks/use-redirect-when-unlogged";
import { logout } from "core/auth/store/auth-slice";
import SvgComponent from "./SvgComponent";

const Navbar = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useRedirectWhenUnlogged();

  if (!user) return null;

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={navbarStyles}>
          <Box>
            <Link to="/">
              <SvgComponent />
            </Link>
          </Box>
          <Box sx={inlineStyles}>
            <Link to="/">
              <Button sx={titleStyles}>Home</Button>
            </Link>
            <Link to={`/profile/${user.id}`}>
              <Button sx={titleStyles}>Perfil</Button>
            </Link>
            <Link to={`/catalogue`}>
              <Button sx={titleStyles}>Catálogo</Button>
            </Link>
            <Button onClick={onLogout} sx={titleStyles}>
              Salir
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}

export default Navbar;
