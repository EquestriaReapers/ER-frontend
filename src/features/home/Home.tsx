import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import curriculum from "./images/curriculum.jpeg";
import SearchIcon from '@mui/icons-material/Search'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
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
} from "./HomeStyles";

const Home = () => {

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const isExtraExtraSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(400));
    const isMinimunWidthScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(300));

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
                                        sx={{
                                            backgroundColor: '#F4F4F4',
                                            marginRight: '10px',
                                            border:'none',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                            "& fieldset": { border: 'none' },
                                            "& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder": {
                                                color: "#000000"
                                            }

                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon color="primary" style={{ color: '#3C3C43', opacity: '0.6' }} /> 
                                                </InputAdornment>
                                            ),

                                            style: {
                                                height: "50px",
                                                color: 'black',
                                            },
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
                            <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px', color:'#FFFFFF', textAlign: isSmallScreen ? 'center' :'left'}}>Lorem</Typography>
                            <Typography sx={{marginBottom:'40px', fontWeight:'500', fontSize:'0.9rem', color:'#FFFFFF', textAlign: isSmallScreen ? 'center' : 'left'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam 
                            </Typography>
                            <Box sx={{display:'flex', alignItems:'center', justifyContent: isSmallScreen ? 'center' : 'left'}}>
                                <FileDownloadOutlinedIcon sx={{ fontSize: '1.5rem', marginTop:'auto', marginBottom:'auto', marginRight:'2px', color:'#FFFFFF'}} />
                                <Typography sx={{marginBottom:'40px', fontSize:'0.8rem', fontWeight:'500', color:'#FFFFFF', margin: 'auto 0 0 0'}}>  Descarga tus CV</Typography>
                            </Box>
                                    
                        </Box>
                    </Box>
                </Box>


                <Box sx={{width:'100%', height:'33%', backgroundColor:'white'}}>
                    <Box sx={{width: isMediumScreen ? '90%': '80%', height:'90%', margin:'auto', maxWidth:'2000px'}}>
                        <Box sx={{height:'30%', width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Box>
                                <Box sx={{width:'max-content', margin:'auto', marginBottom:'40px'}}>
                                    <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                        Lorem
                                    </Typography>
                                </Box>
                                <Box sx={{width:'80%', margin:'auto'}}>
                                    <Typography sx={{textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Maxime mollitia, 
                                        molestiae quas vel sint commodi 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{height:'70%', width: '100%', display: isMediumScreen ? 'grid' : 'flex'}}>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: isMediumScreen ? 'auto' : 0, marginTop: isSmallScreen ? '-10px': 'auto'}}>
                                <Box sx={{width: isExtraExtraSmallScreen ? '200px' : '250px', height: isExtraExtraSmallScreen ? '200px':  '250px', backgroundColor: '#FFE298', transform: 'skew(-2.8deg) rotate(90.5deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'96%', width:'96%', transform: 'rotate(-2.5deg)' }}>

                                    </Box>
                                </Box>
                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom: isMinimunWidthScreen ? '20px':'40px'}}>
                                    Lorem
                                </Typography>
                                <Typography sx={{fontWeight:'500', fontSize:'0.9rem', textAlign: 'center'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Maxime mollitia, 
                                    molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: isSmallScreen ? '10px auto auto auto' : (isMediumScreen ? '40px auto auto auto' : 0)}}>
                                <Box sx={{width: isExtraExtraSmallScreen ? '210px' : '300px', height: isExtraExtraSmallScreen ? '200px' : '250px', backgroundColor: '#A6D6A8', transform: 'skew(-4deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'94%', width:'94%', transform: 'skew(5deg)' }}>

                                    </Box>
                                </Box>

                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom: isMinimunWidthScreen ? '20px' : '40px'}}>
                                    Lorem
                                </Typography>
                                <Typography sx={{fontWeight:'500', fontSize:'0.9rem', textAlign: 'center'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Maxime mollitia, molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
                <Box sx={{width:'100%', height:'12%', backgroundColor:'#A6D6A8'}}>
                    <Box sx={{width: isMediumScreen ? '90%': '80%', height: '90%', margin:'auto', display: 'flex', alignItems: 'center', maxWidth:'2000px'}}>
                        <Box sx={{margin: 'auto', width:'100%', textAlign:'center'}}>
                            <Typography sx={{fontWeight:'500', fontSize:'1rem'}}>
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