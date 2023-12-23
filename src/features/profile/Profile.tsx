import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useProfile from "./use-profile";
import ProfileContent from "./profile-content";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const id = parseInt(useParams<RouteParams>().id!);

  const profile = useProfile(id);
  return (
    <Box>
      {!profile || !id ? (
        <Typography> El perfil no existe!</Typography>
      ) : (
        <ProfileContent profile={profile} />
      )}

      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

interface RouteParams {
  [key: string]: string | undefined;
}

export default Profile;
