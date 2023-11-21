import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AuthState } from "features/auth/store/types";
import { useSelector } from "react-redux";
import { User } from "core/users/types";
import useRedirectWhenUnlogged from "hooks/use-redirect-when-unlogged";
import { logout } from "features/auth/store";

const Dashboard = () => {
  const user = useCurrentUser();
  const dispatch = useDispatch();

  useRedirectWhenUnlogged();

  if (!user) {
    return null;
  }

  return (
    <Box>
      <Typography> DASHBOARD </Typography>
      <Link to="/"> Home </Link>
      <Link to={`/profile/${user.id}`}> Perfil </Link>
      <Button variant="contained" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Box>
  );
};

function useCurrentUser(): User {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}

export default Dashboard;
