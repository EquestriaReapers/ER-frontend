import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material/";
import { navbarStyles } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "core/auth/store/types";
import { User } from "core/users/types";
import useRedirectWhenUnlogged from "hooks/use-redirect-when-unlogged";
import { logout } from "core/auth/store/auth-slice";

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
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
          <Link to={`/profile/${user.id}`}>
            <Typography>Perfil</Typography>
          </Link>
          <Link to={`/catalogue`}>
            <Typography>Catálogo</Typography>
          </Link>
          <Button onClick={onLogout}>
            <Typography>Logout</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}

export default Navbar;
