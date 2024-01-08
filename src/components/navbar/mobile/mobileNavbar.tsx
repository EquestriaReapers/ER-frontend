import { Box, Button, Typography } from "@mui/material/";
import SvgComponent from "../SvgComponent";
import { titleStyles, inlineStyles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "core/auth/store/types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "core/auth/store/auth-slice";
import { User } from "core/users/types";

const navBarMovile = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box>
        <Link to="/">
          <SvgComponent />
        </Link>
      </Box>
      <Box sx={inlineStyles}>
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
        <Link to={`/catalogue`}>
          <Button sx={titleStyles}>Catálogo</Button>
        </Link>
        {user && (
          <Button onClick={onLogout} sx={titleStyles}>
            Salir
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default navBarMovile;

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}
