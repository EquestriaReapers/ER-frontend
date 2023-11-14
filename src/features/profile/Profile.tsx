import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useCallback, useEffect, useState } from "react";
import ShowSkills from "./components/show-skills";
import ShowExperiences from "./components/show-experiences";
import { Link } from "react-router-dom";
import { fetchOneProfile } from "./services/profile.service";
import { AuthState } from "features/auth/store/types";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState({
    user: {
      email: "",
      id: null,
      name: "",
      role: "",
      deletedAt:"",
    },
    image: "",
    description: "",
  });

  function useAuthState(): AuthState {
    return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
  }

  const { token, user } = useAuthState();

  const getProfile = useCallback(async () => {
    console.log(token)
    console.log(user.id)
    if (token && user.id) {
      const data  = await fetchOneProfile(token, user.id);
      setProfile(data);
    }
  }, [token, user]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <Box sx={{ margin: "10px" }}>
      <Typography variant="h3">Perfil:</Typography>
      <Link to={`/profile/edit/${profile.user.id}`}> Editar Perfil </Link>

      <Typography variant="h4">Nombre:</Typography>
      <Typography variant="h6">{profile.user.name}</Typography>
      <Box
        component="img"
        sx={{ height: 100, width: 100, maxHeight: 100, maxWidth: 100 }}
        src={profile.image}
        alt={profile.user.name}
      />

      <Typography variant="h4">Email:</Typography>
      <Typography variant="h6">{profile.user.email}</Typography>

      <Typography variant="h6">{profile.description}</Typography>

      <Typography variant="h4">Habilidades:</Typography>
      <ShowSkills />

      <Typography variant="h4">Experiencia:</Typography>
      <ShowExperiences />
      <Link to="/dashboard"> Regresar </Link>
    </Box>
  );
};

export default Profile;
