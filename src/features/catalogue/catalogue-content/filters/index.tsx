import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SkillsFilter from "./skills-filter/skills-filter";
import LanguaguesFilter from "./languagues-filter/languagues-filter";
import LocationsFilter from "./locations-filter/locations-filter";
import CareersFilter from "./careers-filter/careers-filter";

const Filters = () => {
  return (
    <Box
      sx={{
        px: "25px",
        pt: "35px",
        pb: "25px",
        display: "flex",
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{ fontWeight: "700", fontSize: "1.25rem", fontFamily: "inter" }}
      >
        Filtrar resultados
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flex: 1,
          width: "100%",
        }}
      >
        <SkillsFilter />
        <LanguaguesFilter />
        <LocationsFilter />
        <CareersFilter />
      </Box>
    </Box>
  );
};

export default Filters;
