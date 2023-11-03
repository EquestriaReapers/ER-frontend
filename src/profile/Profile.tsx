import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Profile = () => {
  return (
    <Box sx={{background:'red', margin:'10px'}}>
      <Typography variant="h1" sx={{background:'yellow'}}>Perfil:</Typography>
      <Typography variant="h2" sx={{background:'blue'}}>Nombre:</Typography>
      <Typography variant="h3" >Luis Vasquez</Typography>
      <Typography variant="h2" sx={{background:'blue'}}>Email:</Typography>
      <Typography variant="h3" >8877@.com</Typography>
      <Typography variant="h2" sx={{background:'blue'}}>Experiencia:</Typography>
      <Typography variant="h3" sx={{background:'#FFC526'}}>UCAB Forms</Typography>
      <Typography variant="h2" sx={{background:'#40B4E5'}}>Habilidades:</Typography>
      <Typography variant="h3" sx={{background:'#047732'}}>Desarrollador Front</Typography>
    </Box>
  );
};

export default Profile;
