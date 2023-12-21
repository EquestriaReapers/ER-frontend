import { Typography, Box } from "@mui/material";
import { boxWithButton } from "./modal/styles";
import ShowProfileExperiencies from "./show-profile-experiences";
import ExperienceModalWrapper from "./modal/experience-modal-wrapper";
import useProfileContext from "../../profile-context/use-profile-context";

const Experiences = () => {
  const { profile, isEditable } = useProfileContext();

  return (
    <>
      <div>
        <Box sx={boxWithButton}>
          <Typography variant="h4">Experiencia</Typography>
          {isEditable && (
            <ExperienceModalWrapper experiences={profile.experience} />
          )}
        </Box>
        <ShowProfileExperiencies experiences={profile.experience} />
      </div>
    </>
  );
};

export default Experiences;
