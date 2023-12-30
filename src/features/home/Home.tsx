import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import curriculum from "./images/curriculum.jpeg";
import SearchIcon from '@mui/icons-material/Search'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {  
    fakeNavbarStyles,
    useHomePageContainerStyles, 
    useMainContainerStyles,
    FirstSectionStyles,
    useInsideFirstSectionStyles,
    SearchBarSectionStyles,
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
    SecondSectionStyles,
    useInsideSecondSectionStyles,
    SecondSectionFigureBoxStyles,
    useSecondSectionFigureStyles,
    SecondSectionFigureBackgroundStyles,
    useSecondSectionDownloadCVSectionStyles,
    useSecondSectionDownloadCVTypographyStyles,
    useSecondSectionDownloadCVTextStyles,
    useSecondSectionDownloadCVBoxStyles,
    DownloadIconStyles,
    DownlodCVTypography,
    ThirdSectionStyles,
    useInsideThirdSectionStyles,
    InsideThirdSectionTextStyles,
    InsideThirdSectionBoxTextStyles,
    InsideThirdSectionTypographytStyles,
    ThirdSectionTextStyles,
    ThirdSectionTypographyStyles,
    useThirdSectionFiguresSectionStyles,
    useThirdSectionFirstFiguresSectionStyles,
    useThirdSectionFirstFigureStyles,
    ThirdSectionInsideFirstFigureStyles,
    useThirdSectionFirstFigureTypographyStyles,
    ThirdSectionFirstFigureTextStyles,
    useThirdSectionSecondFiguresSectionStyles,
    useThirdSectionSecondFigureStyles,
    ThirdSectionInsideSecondFigureStyles,
    useThirdSectionSecondFigureTypographyStyles,
    ThirdSectionSecondFigureTextStyles,
    FourthSectionStyles,
    useInsideFourthSectionStyles,
    InsideFourthSectionTextStyles,
    FourthSectionTextStyles,
    TextFieldSearchBarStyles,
    SearchIconStyles,
    TextFieldSearchBarPropStyles,
} from "./HomeStyles";

const Home = () => {

    const HomePageStyles = useHomePageContainerStyles();
    const MainContainerStyles = useMainContainerStyles();
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
    const InsideSecondSectionStyles = useInsideSecondSectionStyles();
    const SecondSectionFigureStyles = useSecondSectionFigureStyles();
    const SecondSectionDownloadCVSectionStyles = useSecondSectionDownloadCVSectionStyles();
    const SecondSectionDownloadCVTypographyStyles = useSecondSectionDownloadCVTypographyStyles();
    const SecondSectionDownloadCVTextStyles = useSecondSectionDownloadCVTextStyles();
    const SecondSectionDownloadCVBoxStyles = useSecondSectionDownloadCVBoxStyles();
    const InsideThirdSectionStyles = useInsideThirdSectionStyles();
    const ThirdSectionFiguresSectionStyles = useThirdSectionFiguresSectionStyles();
    const ThirdSectionFirstFiguresSectionStyles = useThirdSectionFirstFiguresSectionStyles();
    const ThirdSectionFirstFigureStyles = useThirdSectionFirstFigureStyles();
    const ThirdSectionFirstFigureTypographyStyles = useThirdSectionFirstFigureTypographyStyles();
    const ThirdSectionSecondFiguresSectionStyles = useThirdSectionSecondFiguresSectionStyles();
    const ThirdSectionSecondFigureStyles = useThirdSectionSecondFigureStyles();
    const ThirdSectionSecondFigureTypographyStyles = useThirdSectionSecondFigureTypographyStyles();
    const InsideFourthSectionStyles = useInsideFourthSectionStyles();

    return (
        <Box sx={HomePageStyles}>
            <Box sx={fakeNavbarStyles}>NavBar falsa</Box>
            <Box sx={MainContainerStyles}>
                <Box sx={FirstSectionStyles}>
                    <Box sx={InsideFirstSectionStyles}>
                        <Box sx={SearchBarSectionStyles}>
                            <Box sx={InsideSearchBarSectionStyles}>
                                <Box sx={SearchEgresatesSectionStyles}>
                                    <Typography sx={SearchEgresatesTypographyStyles}>¡Busca a tus Egresados!</Typography>
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
                                    <Button variant="contained" color="primary" sx={SearchButtomStyles}>
                                        Buscar
                                    </Button>
                                </Box>
                                <Box sx={InsideSearchBarTextSectionStyles}>
                                    <Typography sx={InsideSearchBarSectionTypographyStyles}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
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
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
                                            numquam 
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

                <Box sx={SecondSectionStyles}>
                    <Box sx={InsideSecondSectionStyles}>
                        <Box sx={SecondSectionFigureBoxStyles}>
                            <Box sx={SecondSectionFigureStyles}>
                                <Box sx={SecondSectionFigureBackgroundStyles}>

                                </Box>
                            </Box>
                        </Box>
                        <Box sx={SecondSectionDownloadCVSectionStyles}>
                            <Typography sx={SecondSectionDownloadCVTypographyStyles}>Lorem</Typography>
                            <Typography sx={SecondSectionDownloadCVTextStyles}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam 
                            </Typography>
                            <Box sx={SecondSectionDownloadCVBoxStyles}>
                                <FileDownloadOutlinedIcon sx={DownloadIconStyles} />
                                <Typography sx={DownlodCVTypography}>Descarga tus CV</Typography>
                            </Box>
                                    
                        </Box>
                    </Box>
                </Box>


                <Box sx={ThirdSectionStyles}>
                    <Box sx={InsideThirdSectionStyles}>
                        <Box sx={InsideThirdSectionTextStyles}>
                            <Box>
                                <Box sx={InsideThirdSectionBoxTextStyles}>
                                    <Typography sx={InsideThirdSectionTypographytStyles}>
                                        Lorem
                                    </Typography>
                                </Box>
                                <Box sx={ThirdSectionTextStyles}>
                                    <Typography sx={ThirdSectionTypographyStyles}>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Maxime mollitia, 
                                        molestiae quas vel sint commodi 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={ThirdSectionFiguresSectionStyles}>
                            <Box sx={ThirdSectionFirstFiguresSectionStyles}>
                                <Box sx={ThirdSectionFirstFigureStyles}>
                                    <Box sx={ThirdSectionInsideFirstFigureStyles}>

                                    </Box>
                                </Box>
                                <Typography sx={ThirdSectionFirstFigureTypographyStyles}>
                                    Lorem
                                </Typography>
                                <Typography sx={ThirdSectionFirstFigureTextStyles}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Maxime mollitia, 
                                    molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                            <Box sx={ThirdSectionSecondFiguresSectionStyles}>
                                <Box sx={ThirdSectionSecondFigureStyles}>
                                    <Box sx={ThirdSectionInsideSecondFigureStyles}>

                                    </Box>
                                </Box>

                                <Typography sx={ThirdSectionSecondFigureTypographyStyles}>
                                    Lorem
                                </Typography>
                                <Typography sx={ThirdSectionSecondFigureTextStyles}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Maxime mollitia, molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={FourthSectionStyles}>
                    <Box sx={InsideFourthSectionStyles}>
                        <Box sx={InsideFourthSectionTextStyles}>
                            <Typography sx={FourthSectionTextStyles}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                molestiae quas vel sint commodi repudiandae consequuntur
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Home;