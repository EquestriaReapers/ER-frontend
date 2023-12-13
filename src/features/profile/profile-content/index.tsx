import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useAuthState } from "hooks/use-auth-state";
import EditProfileModal from "../edit-profile/modal";
import { Profile } from "core/profiles/types";
import ProfileSkills from "./profile-skills/profile-skills";
import ProfileExperiences from "./profile-experience/profile-experience";
import { bannerStyles, nameSectionStyles } from "../styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import { mainTitleStyles } from "./styles/styles";
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
                      display: "flex",
                      fontWeight: "700",
                      fontSize: "2.5rem",
                    }}
                  >
                    {profile.user.name} {profile.user.lastname}{" "}
                    <Box sx={{ marginLeft: "16px" }}>
                      {isEditable && <EditProfileModal />}
                    </Box>
                  </Typography>
                  <Typography sx={mainTitleStyles}>
                    {profile.mainTitle}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ backgroundColor: "#007935", color: "white" }}
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
                <Box>
                  <Typography sx={{ fontWeight: "700", fontSize: "2.2rem" }}>
                    Sobre Mi
                  </Typography>
                  <Typography
                    sx={{
                      width: "90%",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    {profile.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: { lg: "40%", md: "40%", sm: "40%", xs: "70%" },
                    height: "30%",
                    backgroundColor: "#F4F4F4",
                    justifyContent: "space-between",
                    px: "24px",
                    py: "20px",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
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
                        <LocationOnIcon />
                        <Typography sx={{ marginLeft: "4px" }}>
                          Ubicación
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <EditIcon />
                      </Box>
                    </Box>

                    <Typography sx={{ marginLeft: "10px" }}>
                      GABRIEL BOLAS GIANNIS, ANTETOKOUNMPO
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
                      <Typography sx={{ marginLeft: "5px" }}>
                        Website
                      </Typography>
                    </Box>

                    <Typography sx={{ marginLeft: "10px" }}>
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
