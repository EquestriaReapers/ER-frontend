import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ShowSkills from "./show-profile-skills";
import useProfileContext from "../../profile-context/use-profile-context";
import { skillTitleStyles, boxWrapperStyles, boxStyles } from "./styles";
import EditSkills from "./edit-skills";

const ProfileSkills = () => {
  const { profile, isEditable } = useProfileContext();
  return (
    <>
      <Box sx={boxWrapperStyles}>
        <Box sx={boxStyles}>
          <Typography sx={skillTitleStyles} variant="h4">
            Habilidades
          </Typography>
          {isEditable && <EditSkills />}
        </Box>

        <ShowSkills skills={profile.skills} />
      </Box>
    </>
  );
};

export default ProfileSkills;
