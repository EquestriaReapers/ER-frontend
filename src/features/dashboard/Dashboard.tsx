import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AuthState } from "features/auth/store/types";
import { useSelector } from "react-redux";
import { User } from "core/users/types";
import useRedirectWhenUnlogged from "hooks/use-redirect-when-unlogged";

const Dashboard = () => {
  const user = useCurrentUser();

  useRedirectWhenUnlogged();

  if (!user) return null;

  return (
    <Box>
      <Typography> DASHBOARD </Typography>
      <Link to="/"> Home </Link>
      <Link to={`/profile/${user.id}`}> Perfil </Link>
    </Box>
  );
};

function useCurrentUser(): User | null {
  return useSelector<{ auth: AuthState }>((state) => state.auth.user) as User;
}

export default Dashboard;
