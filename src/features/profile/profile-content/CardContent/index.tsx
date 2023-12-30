import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import useProfileContext from "../../profile-context/use-profile-context";
import {
  contactTitlesStyles,
  locationAndEditButtonStyles,
  locationBoxStyles,
  websiteBoxStyles,
  websiteTitleContainerStyles,
  editIconStyles,
} from "../styles";
import EditCardContent from "./edit-cardcontent/edit-cardcontent.component";

const ProfileLocation = () => {
  const { isEditable } = useProfileContext();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box sx={locationAndEditButtonStyles}>
          <Box sx={locationBoxStyles}>
            <LocationOnIcon />
            &nbsp;
            <Typography sx={contactTitlesStyles}>Ubicación</Typography>
          </Box>
          <Box sx={{ editIconStyles }}>{isEditable && <EditCardContent />}</Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "inter",
            fontSize: "16px",
          }}
        >
          Puerto Ordaz, Venezuela
        </Typography>
      </Box>
      <Box sx={websiteBoxStyles}>
        <Box sx={websiteTitleContainerStyles}>
          <LanguageIcon />
          &nbsp;
          <Typography sx={contactTitlesStyles}>Website</Typography>
        </Box>

        <Typography sx={{ fontFamily: "inter", fontSize: "16px" }}>
          www.abcdefge.com
        </Typography>
      </Box>
    </>
  );
};

export default ProfileLocation;
