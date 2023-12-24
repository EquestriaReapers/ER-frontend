import { Typography, Box } from "@mui/material";
import ShowProfileExperiencies from "./show-profile-experiences";
import ExperienceModalWrapper from "./modal/experience-modal-wrapper";
import useProfileContext from "../../profile-context/use-profile-context";
import { experienceTitleTypographyStyles } from "./styles";

const Experiences = () => {
  const { isEditable, profile } = useProfileContext();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "18px", sm: "45px" },
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Typography variant="h4" sx={experienceTitleTypographyStyles}>
            Experiencia
          </Typography>
          {isEditable && <ExperienceModalWrapper />}
        </Box>

        <ShowProfileExperiencies experiences={profile.experience} />
      </Box>
    </>
  );
};

export default Experiences;
