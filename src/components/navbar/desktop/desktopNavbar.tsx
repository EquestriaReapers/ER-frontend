import { Box, Button } from "@mui/material/";
//import SvgComponent from "../SvgComponent";
import { titleStyles, inlineStyles } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "core/auth/store/types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "core/auth/store/auth-slice";
import { User } from "core/users/types";
import Logo from "../logo.png";

const NavBarDesktop = ({ setIsOpen }: Props) => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  setIsOpen(false);

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
      {/*<Box>
        <Link to="/">
          <SvgComponent />
        </Link>
      </Box>*/}
      <Box>
        <Link to="/">
          <img src={Logo} alt="logo" width="70px" height="65px" />
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
        {!user && (
          <Link to={`/register`}>
            <Button sx={titleStyles}>Registro</Button>
          </Link>
        )}
        <Link to={`/catalogue`}>
          <Button sx={titleStyles}>Catálogo</Button>
        </Link>
        <Link to={`/explore-portfolios`}>
          <Button sx={titleStyles}>Portafolios</Button>
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

export default NavBarDesktop;

export interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}
