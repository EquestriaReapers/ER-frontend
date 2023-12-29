import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import curriculum from "./images/curriculum.jpeg";
import background from "./images/background.jpeg"
import SearchIcon from '@mui/icons-material/Search'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Box sx={{height: isMediumScreen ? '370vh' : '270vh', minHeight: isMediumScreen ? '4390px': '2200px', minWidth: isMediumScreen ? '600px' : '900px', width: '100%'}}>
            <Box sx={{width:'100%', height:'65px', backgroundColor:'blue', fontSize:'3rem'}}>NavBar falsa</Box>
            <Box sx={{width:'100%', height: isMediumScreen ?  'calc(370vh - 60px)' : 'calc(270vh - 65px)', minHeight:isMediumScreen ? '4350px' : '2140px'}}>
                <Box sx={{width: '100%', height: '33%', backgroundColor:'white', maxWidth:'2000px', margin: 'auto'}}>
                    <Box sx={{width: isMediumScreen ? '90%' : '80%', margin:'auto', height:'90%'}}>
                        <Box sx={{width:'100%', height:'50%', display:'flex', alignItems:'center'}}>
                            <Box sx={{margin: isMediumScreen ? 'auto' : 'auto auto 0 auto'}}>
                                <Box sx={{width:'max-content', margin:'auto', marginBottom:'40px'}}>
                                    <Typography sx={{fontWeight:'600', fontSize:'3rem'}}>¡Busca a tus Egresados!</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '500px', margin: 'auto', marginBottom:'40px'}}>
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
                                    <Button variant="contained" color="primary" sx={{backgroundColor:'#007934', height:'50px', fontWeight:'300', fontSize: '0.8rem'}}>
                                        Buscar
                                    </Button>
                                </Box>
                                <Box sx={{width:'90%', margin:'auto'}}>
                                    <Typography sx={{fontWeight:'500', fontSize:'1rem', textAlign:'center'}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{width:'100%', height:'50%', display: isMediumScreen ? 'grid' : 'flex', alignItems:'center'}}>
                            <Box sx={{width: isMediumScreen ? '100%' : '45%', height:'50%', margin: isMediumScreen ? 'auto' : 0}}>
                                <Box>
                                    <Box>
                                        <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px', textAlign: isMediumScreen ? 'center' : 'left'}}>
                                            Obtén tu CV
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontWeight:'500', fontSize:'0.9rem', textAlign: isMediumScreen ? 'center' : 'left'}}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
                                            numquam 
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                            <Box sx={{width:'55%', height:'50%',  transform: 'rotate(3deg)', display:'flex', justifyContent:'center', margin: isMediumScreen ? 'auto' : 0}}>
                                <img src={curriculum} alt="" style={ {minHeight: isMediumScreen ? '600px' : '450px', height: isMediumScreen ? '80vh': '50vh', maxHeight: isMediumScreen ? '700px' : '600px', width:'auto', border:'1px solid black'}} />
                            </Box>

                        </Box>
                    </Box>
                    
                </Box>

                <Box sx={{
                    width: '100%', 
                    height:'22%', 
                    position: 'relative',
                    '&::before': {
                    content: '""',
                    position:'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(3.3px)',
                    zIndex: -1,
                    },
                }}>
                    <Box sx={{width: isMediumScreen ? '90%' : '80%', height: '90%', display:'flex', margin:'auto', position:'relative', zIndex:1, maxWidth: '2000px'}}>
                        <Box sx={{width:'50%', height:'100%', display:'flex', alignItems:'center'}}>
                            <Box sx={{height:'300px', width:'250px', backgroundColor:'#72C4E8',  transform: 'rotate(8deg)', display:'flex', alignItems:'center', margin:'auto'}}>
                                <Box sx={{height:'110%', width:'98%', backgroundColor:'white', transform: 'rotate(-9deg)', marginBottom:'40px'}}>

                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{width:'50%', height:'40%', marginTop:'auto', marginBottom:'60px'}}>
                            <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px', color:'#FFFFFF'}}>Lorem</Typography>
                            <Typography sx={{marginBottom:'40px', fontWeight:'500', fontSize:'0.9rem', color:'#FFFFFF'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam 
                            </Typography>
                            <Box sx={{display:'flex', alignItems:'center'}}>
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
                                <Box sx={{width:'max-content', margin:'auto'}}>
                                    <Typography sx={{width:'400px', textAlign: 'center'}}>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Maxime mollitia, 
                                        molestiae quas vel sint commodi 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{height:'70%', width: '100%', display: isMediumScreen ? 'grid' : 'flex'}}>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: isMediumScreen ? 'auto' : 0}}>
                                <Box sx={{width:'250px', height:'250px', backgroundColor: '#FFE298', transform: 'skew(-2.8deg) rotate(90.5deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'96%', width:'96%', transform: 'rotate(-2.5deg)' }}>

                                    </Box>
                                </Box>
                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                    Lorem
                                </Typography>
                                <Typography sx={{fontWeight:'500', fontSize:'0.9rem', textAlign: 'center'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Maxime mollitia, 
                                    molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: isMediumScreen ? '40px auto auto auto' : 0}}>
                                <Box sx={{width:'300px', height:'250px', backgroundColor: '#A6D6A8', transform: 'skew(-4deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'94%', width:'94%', transform: 'skew(5deg)' }}>

                                    </Box>
                                </Box>

                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
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