import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "features/auth/store/types";
import { User } from "core/users/types";
import useRedirectWhenUnlogged from "hooks/use-redirect-when-unlogged";
import { logout } from "features/auth/store/auth-slice";
import { buttonStyles, dashboardBoxStyles } from "./styles/styles";

const Dashboard = () => {
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
    <Box sx={dashboardBoxStyles}>
      <Typography> DASHBOARD </Typography>
      <Link to="/"> Home </Link>
      <Link to={`/profile/${user.id}`}> Perfil </Link>
      <Link to={`/catalogue`}> Catalogo </Link>
      <Button variant="contained" onClick={onLogout} sx={buttonStyles}>
        Logout
      </Button>
    </Box>
  );
};

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}

export default Dashboard;
