import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { 
  FirstSectionStyles,
  useInsideFirstSectionStyles,
  SearchBarSectionStyles,
  TextFieldSearchBarStyles,
  SearchIconStyles,
  TextFieldSearchBarPropStyles,
  useInsideSearchBarSectionStyles,
  useSearchEgresatesSectionStyles,
  useSearchEgresatesTypographyStyles,
  useSearchBoxStyles,
  SearchButtomStyles,
  InsideSearchBarTextSectionStyles,
  InsideSearchBarSectionTypographyStyles,
  useGetCVSectionStyles,
  useInsideGetCVSectionStyles,
  useInsideGetCVTypographytyles,
  useInsideGetCVSectionTextStyles,
  useGetCVBoxtStyles,
  useGetCVImagetStyles,
} from "./styles";
import curriculum from "./images/curriculum.jpeg"

const FirstSection = () => {

  const InsideFirstSectionStyles = useInsideFirstSectionStyles();
  const InsideSearchBarSectionStyles = useInsideSearchBarSectionStyles();
  const SearchEgresatesSectionStyles = useSearchEgresatesSectionStyles();
  const SearchEgresatesTypographyStyles = useSearchEgresatesTypographyStyles();
  const SearchBoxStyles = useSearchBoxStyles();
  const GetCVSectionStyles = useGetCVSectionStyles();
  const InsideGetCVSectionStyles = useInsideGetCVSectionStyles();
  const InsideGetCVTypographyStyles = useInsideGetCVTypographytyles();
  const InsideGetCVSectionTextStyles = useInsideGetCVSectionTextStyles();
  const GetCVBoxStyles = useGetCVBoxtStyles();
  const GetCVImageStyles = useGetCVImagetStyles();

    return (
        <Box sx={FirstSectionStyles}>
          <Box sx={InsideFirstSectionStyles}>
            <Box sx={SearchBarSectionStyles}>
              <Box sx={InsideSearchBarSectionStyles}>
                <Box sx={SearchEgresatesSectionStyles}>
                  <Typography sx={SearchEgresatesTypographyStyles}>
                    ¡Busca a tus Egresados!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={GetCVSectionStyles}>
              <Box sx={InsideGetCVSectionStyles}>
                <Box>
                  <Box>
                    <Typography sx={InsideGetCVTypographyStyles}>
                      Obtén tu CV
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={InsideGetCVSectionTextStyles}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={GetCVBoxStyles}>
                <img src={curriculum} alt="" style={GetCVImageStyles} />
              </Box>
            </Box>
          </Box>
        </Box>
    );
}

export default FirstSection;

