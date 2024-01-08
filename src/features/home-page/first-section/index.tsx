import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import {
  useFirstSectionStyles,
  useInsideFirstSectionStyles,
  SearchBarSectionStyles,
  useInsideSearchBarSectionStyles,
  TextFieldSearchBarStyles,
  SearchIconStyles,
  TextFieldSearchBarPropStyles,
  useSearchGraduatesSectionStyles,
  useSearchGraduatesTypographyStyles,
  ProfessionalsColor,
  useSearchBoxStyles,
  SearchButtomStyles,
  InsideSearchBarTextSectionStyles,
  useInsideSearchBarSectionTypographyStyles,
} from "./styles";

const FirstSection = () => {
  const FirstSectionStyles = useFirstSectionStyles();
  const InsideFirstSectionStyles = useInsideFirstSectionStyles();
  const InsideSearchBarSectionStyles = useInsideSearchBarSectionStyles();
  const InsideSearchBarSectionTypographyStyles =
    useInsideSearchBarSectionTypographyStyles();
  const SearchGraduatesSectionStyles = useSearchGraduatesSectionStyles();
  const SearchGraduatesTypographyStyles = useSearchGraduatesTypographyStyles();
  const SearchBoxStyles = useSearchBoxStyles();

  return (
    <Box sx={FirstSectionStyles}>
      <Box sx={InsideFirstSectionStyles}>
        <Box sx={SearchBarSectionStyles}>
          <Box sx={InsideSearchBarSectionStyles}>
            <Box sx={SearchGraduatesSectionStyles}>
              <Typography sx={SearchGraduatesTypographyStyles}>
                Busca <span style={ProfessionalsColor}>profesionales</span>{" "}
                UCABISTAS
              </Typography>
            </Box>
            <Box sx={SearchBoxStyles}>
              <TextField
                id="search"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={TextFieldSearchBarStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" style={SearchIconStyles} />
                    </InputAdornment>
                  ),

                  style: TextFieldSearchBarPropStyles,
                }}
                placeholder="Ej: ingeniería informática"
              />
              <Button
                variant="contained"
                color="primary"
                sx={SearchButtomStyles}
              >
                Buscar
              </Button>
            </Box>
            <Box sx={InsideSearchBarTextSectionStyles}>
              <Typography sx={InsideSearchBarSectionTypographyStyles}>
                ¡Puedes encontrar profesionales egresados de la UCAB por nombre,
                carrera, habilidades, ubicación e idiomas!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
