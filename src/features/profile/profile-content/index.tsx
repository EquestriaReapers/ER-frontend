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
            <Box sx={{ width: "90%", margin: "auto" }}>
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
              <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
                <Box>
                  <Typography sx={{ fontWeight: "500", fontSize: "2.2rem" }}>
                    Sobre Mi
                  </Typography>
                  <Typography sx={{ width: "55%" }}>
                    {profile.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "40%",
                    backgroundColor: "#F4F4F4",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <LocationOnIcon />
                      <Typography>ubicacion</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <EditIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Box>
                    <Box sx={{ display: "flow" }}></Box>
                  </Box>
                </Box>
              </Box>
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
