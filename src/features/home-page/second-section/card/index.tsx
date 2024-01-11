import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  useCardStyles,
  CardFirstSection,
  useCardNameStyles,
  useCardOcupationStyles,
  CardSecondLine,
  useCardLocationLineStyles,
  useCardLocationIconStyles,
  CardSecondSection,
  skillTitleStyles,
} from "./styles";
import { Profile } from "core/profiles/types";
import useTransformCareerEnum from "hooks/use-transform-career-enum";

const Card = ({ profile }: Props) => {
  const CardStyles = useCardStyles();
  const CardNameStyles = useCardNameStyles();
  const CardOcupationStyles = useCardOcupationStyles();
  const CardLocationLineStyles = useCardLocationLineStyles();
  const CardLocationIconStyles = useCardLocationIconStyles();

  const transformedCareer = useTransformCareerEnum(profile.mainTitle);

  return (
    <Box sx={CardStyles}>
      <Box sx={CardFirstSection}>
        <Typography sx={CardNameStyles}>
          {profile.user.name} {profile.user.lastname}
        </Typography>
        <Typography sx={CardOcupationStyles}>{transformedCareer}</Typography>

        <Box sx={CardSecondLine}>
          {!profile.countryResidence ? (
            <Typography sx={CardLocationLineStyles}>
              Residencia no especificada
            </Typography>
          ) : (
            <Typography sx={CardLocationLineStyles}>
              {profile.countryResidence}
            </Typography>
          )}
          <LocationOnIcon sx={CardLocationIconStyles} />
        </Box>
      </Box>
      <Box sx={CardSecondSection}>
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            flexWrap: "wrap",
            width: "100%",
            my: 2,
          }}
        >
          {profile.skills.length === 0 ? (
            <Typography
              sx={{
                fontFamily: "inter",
                color: "#007934",
                fontWeight: "700",
                justifySelf: "center",
              }}
            >
              No tiene habilidades especificadas
            </Typography>
          ) : (
            profile.skills
              .slice(0, 5)
              .map((skill) => <Chip label={skill.name} sx={skillTitleStyles} />)
          )}
        </Box>
      </Box>
    </Box>
  );
};

interface Props {
  profile: Profile;
}
export default Card;
