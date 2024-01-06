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
import EditContactCard from "./edit-contact-card";

const ContactCard = () => {
  const { isEditable, profile } = useProfileContext();
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
          <Box
            sx={{
              editIconStyles,
              display: "flex",
              width: "24px",
              height: "24px",
            }}
          >
            {isEditable && <EditContactCard />}
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "inter",
            fontSize: "16px",
          }}
        >
          {profile.countryResidence}
        </Typography>
      </Box>
      <Box sx={websiteBoxStyles}>
        <Box sx={websiteTitleContainerStyles}>
          <LanguageIcon />
          &nbsp;
          <Typography sx={contactTitlesStyles}>Websites</Typography>
        </Box>

        <Typography sx={{ fontFamily: "inter", fontSize: "16px" }}>
          {profile.website}
        </Typography>
      </Box>
    </>
  );
};

export default ContactCard;
