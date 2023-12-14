import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useAuthState } from "hooks/use-auth-state";
import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./profile-skills/profile-skills";
import ProfileExperiences from "./profile-experience/profile-experience";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import {
  bannerStyles,
  buttonStyles,
  mainTitleStyles,
  nameSectionStyles,
} from "./styles/styles";
const ProfileContent = ({ profile }: ProfileContentProps) => {
  const loggedUser = useAuthState().user;
  const isEditable = !!(loggedUser && loggedUser.id == profile.userId);

  return (
    <>
      {loggedUser ? (
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
                  <Typography
                    variant="h4"
                    sx={{
                      paddingBottom: "12px",
                      display: "flex",
                      fontWeight: "700",
                      fontFamily: "inter",
                    }}
                  >
                    {profile.user.name} {profile.user.lastname}{" "}
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "0px",
                          lg: "24px",
                          md: "24px",
                          sm: "24px",
                        },
                      }}
                    >
                      {isEditable && <EditProfileModal />}
                    </Box>
                  </Typography>
                  <Typography variant="h4" sx={mainTitleStyles}>
                    {profile.mainTitle}
                  </Typography>
                </Box>
                <Box>
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
              <Box
                sx={{
                  display: "flex",
                  flexWrap: {
                    lg: "nowrap",
                    md: "nowrap",
                    sm: "nowrap",
                    xs: "wrap",
                  },
                }}
              >
                <Box sx={{ paddingTop: "14px", paddingBottom: "24px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontFamily: "inter",
                      paddingBottom:"12px"
                    }}
                  >
                    Sobre Mí
                  </Typography>
                  <Typography
                    sx={{
                      width: "90%",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      fontFamily: "inter",
                    }}
                  >
                    {profile.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "90%", sm: "40%" },
                    height: "30%",
                    backgroundColor: "#F4F4F4",
                    justifyContent: "space-between",
                    px: { xs: "6px", sm: "24px" },
                    py: { xs: "8px", sm: "20px" },
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                          pr: {
                            lg: "160px",
                            xs: "20px",
                          },
                        }}
                      >
                        <LocationOnIcon />
                        <Typography
                          sx={{
                            marginLeft: "4px",
                            fontFamily: "inter",
                            fontWeight: "600",
                          }}
                        >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        pr: {
                          lg: "160px",
                          xs: "20px",
                        },
                      }}
                    >
                      <LanguageIcon />{" "}
                      <Typography
                        sx={{
                          marginLeft: "5px",
                          fontFamily: "inter",
                          fontWeight: "600",
                        }}
                      >
                        Website
                      </Typography>
                    </Box>

                    <Typography
                      sx={{ marginLeft: "10px", fontFamily: "inter" }}
                    >
                      www.abcdefge.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <ProfileSkills
                isEditable={isEditable}
                currentProfileSkills={profile.skills}
              />

              <ProfileExperiences
                isEditable={isEditable}
                currentProfileExperience={profile.experience}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>No se encontro el perfil!</Typography>
      )}
    </>
  );
};

export interface ProfileContentProps {
  profile: Profile;
}
export default ProfileContent;
