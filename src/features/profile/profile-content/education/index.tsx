import { Typography, Box } from "@mui/material";
import { educationTitleStyles, boxTitleStyles } from "./styles";
import ShowProfileEducation from "./show-profile-education";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const Education = () => {
  const { profile } = useProfileContext();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "18px", sm: "45px" },
        }}
      >
        <Box sx={boxTitleStyles}>
          <Typography variant="h4" sx={educationTitleStyles}>
            Educación
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: { xs: "18px", sm: "45px" },
          }}
        >
          <ShowProfileEducation educations={profile.education} />
        </Box>
      </Box>
    </>
  );
};

export default Education;
