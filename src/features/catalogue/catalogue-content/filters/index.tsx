import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DateRangePicker from "../components/DateRangePicker";
import { typographyStyles } from "./styles";
import SkillsFilter from "./skills-filter/skills-filter";
import LanguaguesFilter from "./languagues-filter/languagues-filter";
import LocationsFilter from "./locations-filter/locations-filter";

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

        <Typography sx={{ ...typographyStyles }}>Habilidades</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px",
            }}
          >
            Fecha de Egreso
          </Typography>
          <DateRangePicker />
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
