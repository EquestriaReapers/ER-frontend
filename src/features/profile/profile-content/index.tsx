import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import {
  aboutMeSection,
  bannerStyles,
  buttonStyles,
  contactSectionStyles,
  contactTitlesStyles,
  descriptionStyles,
  editIconStyles,
  locationBoxStyles,
  mainTitleStyles,
  nameSectionStyles,
  nameStyles,
  websiteBoxStyles,
  websiteTitleContainerStyles,
} from "./styles/styles";
import useProfileContext from "../profile-context/use-profile-context";
import EditProfileModal from "./profile-data/modal";
import Experiences from "./experiences";
import Skills from "./skills";

const ProfileContent = () => {
  const { profile, isEditable } = useProfileContext();

  return (
    <>
      <Box>
        <Box sx={bannerStyles}></Box>
        <Box>
          <Box
            sx={{
              width: "90%",
              mx: { lg: "auto", md: "auto", xs: "20px" },
              mt: "30px",
            }}
          >
            <Box sx={nameSectionStyles}>
              <Box>
                <Typography variant="h4" sx={nameStyles}>
                  {profile.user.name} {profile.user.lastname}{" "}
                  <Box sx={editIconStyles}>
                    {isEditable && <EditProfileModal />}
                  </Box>
                </Typography>
                <Typography variant="h4" sx={mainTitleStyles}>
                  {profile.mainTitle}
                  Ingenieria Informatica
                </Typography>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "30%", md: "20%" } }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={buttonStyles}
                >
                  Descargar CV
                </Button>
              </Box>
            </Box>
            <Box sx={aboutMeSection}>
              <Box sx={{ paddingTop: "14px", paddingBottom: "24px" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    fontFamily: "inter",
                  }}
                >
                  Sobre Mí
                </Typography>
                {!profile.description ? (
                  <Typography>El perfil no tiene descripción.</Typography>
                ) : (
                  <Typography sx={descriptionStyles}>
                    {profile.description}
                  </Typography>
                )}
              </Box>
              <Box sx={contactSectionStyles}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={locationBoxStyles}>
                      <LocationOnIcon />
                      <Typography sx={contactTitlesStyles}>
                        Ubicación
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <EditIcon />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "inter",
                    }}
                  >
                    Puerto Ordaz, Venezuela
                  </Typography>
                </Box>
                <Box sx={websiteBoxStyles}>
                  <Box sx={websiteTitleContainerStyles}>
                    <LanguageIcon />{" "}
                    <Typography sx={contactTitlesStyles}>Website</Typography>
                  </Box>

                  <Typography sx={{ marginLeft: "10px", fontFamily: "inter" }}>
                    www.abcdefge.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Skills />
            <Experiences />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileContent;
