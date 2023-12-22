import Typography from "@mui/material/Typography";
import { Experience } from "core/profiles/types";
import ShowExperiences from "features/profile/experiences/show-experiences/show-experiences";
import EditProfileModal from "features/profile/edit-profile/modal";
import { Box } from "@mui/material";

const ProfileExperience = ({ isEditable, currentProfileExperience }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "18px", sm: "45px" },
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#000",
            fontFamily: "inter",
            fontSize: { xs: "22px", sm: "35px" },
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          }}
        >
          Experiencia
        </Typography>
        {isEditable && <EditProfileModal />}
      </Box>

      <ShowExperiences experience={currentProfileExperience} />
    </Box>
  );
};

export interface Props {
  isEditable: boolean;
  currentProfileExperience: Experience[];
}

export default ProfileExperience;
