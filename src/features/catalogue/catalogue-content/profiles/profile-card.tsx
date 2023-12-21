import Typography from "@mui/material/Typography";
import { Profile } from "core/profiles/types";
import { Box } from "@mui/material/";
import { profileCardTypography, profileContainer } from "./styles/styles";
import ShowProfileCardSkills from "./show-profile-card-skills";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }: Props) => {
  return (
    <Box sx={profileContainer}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap" },
            gap: { xs: "10px" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link
            to={`/profile/${profile.id}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#007934",
                fontWeight: "700",
                fontFamily: "inter",
                fontSize: "24px",
              }}
            >
              {profile.user.name} {profile.user.lastname}
            </Typography>
          </Link>

          {!profile.mainTitle ? (
            <Typography
              sx={{ fontWeight: "600", fontFamily: "inter", fontSize: "16px" }}
            >
              Egresado sin carrera asociada
            </Typography>
          ) : (
            <Typography
              sx={{ fontWeight: "600", fontFamily: "inter", fontSize: "16px" }}
            >
              {profile.mainTitle}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {profile.countryResidence ? (
          <Box sx={{ display: "flex" }}>
            <Typography sx={profileCardTypography}>
              {profile.countryResidence}, Bolivar
            </Typography>
            <LocationOnIcon sx={{ color: "#545454", marginLeft: "2px" }} />
          </Box>
        ) : null}
        <Box>
          {profile.skills.length === 0 ? (
            <Typography>Egresado sin habilidades especificadas.</Typography>
          ) : (
            <ShowProfileCardSkills skills={profile.skills} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
interface Props {
  profile: Profile;
}
