import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import useProfileContext from "../../profile-context/use-profile-context";
import { skillTitleTypographyStyles } from "./styles";
import EditCardContent from "./edit-cardcontent";

const ProfileLocation = () => {
  const { profile, isEditable } = useProfileContext();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Typography sx={skillTitleTypographyStyles} variant="h4">
            Habilidades
          </Typography>
          {isEditable && <EditCardContent />}
        </Box>

        <ShowSkills skills={profile.skills} />
      </Box>
    </>
  );
};

export default ProfileLocation;
