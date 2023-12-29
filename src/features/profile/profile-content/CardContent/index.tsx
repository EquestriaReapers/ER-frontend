import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import useProfileContext from "../../profile-context/use-profile-context";
//import { skillTitleTypographyStyles } from "./styles";
import EditCardContent from "./edit-cardcontent/edit-cardcontent.component";

const ProfileLocation = () => {
  const { profile, isEditable } = useProfileContext();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Typography variant="h4">Modal abiertito uwu</Typography>
          {isEditable && <EditCardContent />}
        </Box>
      </Box>
    </>
  );
};

export default ProfileLocation;
