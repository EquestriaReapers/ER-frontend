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
    useSearchEgresatesSectionStyles,
    useSearchEgresatesTypographyStyles,
    ProfesionalsColor,
    useSearchBoxStyles,
    SearchButtomStyles,
    InsideSearchBarTextSectionStyles,
    useInsideSearchBarSectionTypographyStyles,
 } from "./FirstSectionStyles";

const FirstSection = () => {

    const FirstSectionStyles = useFirstSectionStyles();
    const InsideFirstSectionStyles = useInsideFirstSectionStyles();
    const InsideSearchBarSectionStyles = useInsideSearchBarSectionStyles();
    const InsideSearchBarSectionTypographyStyles = useInsideSearchBarSectionTypographyStyles();
    const SearchEgresatesSectionStyles = useSearchEgresatesSectionStyles();
    const SearchEgresatesTypographyStyles = useSearchEgresatesTypographyStyles();
    const SearchBoxStyles = useSearchBoxStyles();

    return (
        <Box sx={FirstSectionStyles}>
            <Box sx={InsideFirstSectionStyles}>
                <Box sx={SearchBarSectionStyles}>
                    <Box sx={InsideSearchBarSectionStyles}>
                    <Box sx={SearchEgresatesSectionStyles}>
                        <Typography sx={SearchEgresatesTypographyStyles}>
                            Busca <span style={ProfesionalsColor}>profesionales</span> UCABISTAS
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
                                <SearchIcon
                                color="primary"
                                style={SearchIconStyles}
                                />
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
                            Puedes encontrar profesionales egresados de la UCAB por nombre, 
                            carrera, habilidades, ubicacion e idiomas!
                        </Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FirstSection;