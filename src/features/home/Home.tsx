import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import curriculum from "./images/curriculum.jpeg"

const Home = () => {
    return (
        <Box sx={{height:'270vh'}}>
            <Box sx={{width:'100%', height:'65px', backgroundColor:'blue'}}>NavBar falsa</Box>
            <Box sx={{width:'100%', height:'calc(270vh - 65px)'}}>
                <Box sx={{width: '100%', height: '33%', backgroundColor:'white'}}>
                    <Box sx={{width:'80%', margin:'auto', height:'90%'}}>
                        <Box sx={{width:'100%', height:'50%', display:'flex', alignItems:'center'}}>
                            <Box sx={{margin:'auto'}}>
                                <Box sx={{width:'max-content', margin:'auto', marginBottom:'40px'}}>
                                    <Typography sx={{fontWeight:'600', fontSize:'2rem'}}>¡Busca a tus Egresados!</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '400px', margin: 'auto', marginBottom:'40px'}}>
                                    <TextField
                                        id="search"
                                        label="Buscar"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        sx={{
                                            backgroundColor: '#F4F4F4',
                                            marginRight: '5px'
                                          }}
                                        placeholder="Ej: ingeniería informática"
                                    />
                                    <Button variant="contained" color="primary" sx={{backgroundColor:'#007934'}}>
                                        Buscar
                                    </Button>
                                </Box>
                                <Box sx={{width:'80%', margin:'auto'}}>
                                    <Typography>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{width:'100%', height:'50%', display:'flex', alignItems:'center'}}>
                            <Box sx={{width:'45%', height:'50%'}}>
                                <Box>
                                    <Box>
                                        <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                            Obtén tu CV
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
                                            numquam 
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                            <Box sx={{width:'55%', height:'50%',  transform: 'rotate(3deg)', display:'flex', justifyContent:'center'}}>
                                <img src={curriculum} alt="" style={ {height: '50vh', width:'auto', border:'1px solid black'}} />
                            </Box>

                        </Box>
                    </Box>
                    
                </Box>
                
                <Box sx={{width: '100%', height:'22%' , backgroundColor:'#F4F4F4'}}>
                    <Box sx={{width:'80%', height: '90%', display:'flex', margin:'auto'}}>
                        <Box sx={{width:'50%', height:'100%', display:'flex', alignItems:'center'}}>
                            <Box sx={{height:'300px', width:'250px', backgroundColor:'#FFB2A4',  transform: 'rotate(9deg)', display:'flex', alignItems:'center', margin:'auto'}}>
                                <Box sx={{height:'110%', width:'98%', backgroundColor:'white', transform: 'rotate(-9deg)', marginBottom:'40px'}}>

                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{width:'50%', height:'40%', marginTop:'auto', marginBottom:'60px'}}>
                            <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>Lorem</Typography>
                            <Typography sx={{marginBottom:'40px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam 
                            </Typography>
                            <Typography sx={{marginBottom:'40px'}}>Descarga tus CV</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'100%', height:'33%', backgroundColor:'white'}}>
                    <Box sx={{width:'80%', height:'90%', margin:'auto'}}>
                        <Box sx={{height:'30%', width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Box>
                                <Box sx={{width:'max-content', margin:'auto', marginBottom:'40px'}}>
                                    <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                        Lorem
                                    </Typography>
                                </Box>
                                <Box sx={{width:'max-content', margin:'auto'}}>
                                    <Typography sx={{width:'400px'}}>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Maxime mollitia, 
                                        molestiae quas vel sint commodi 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{height:'70%', width: '100%', display:'flex'}}>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <Box sx={{width:'250px', height:'250px', backgroundColor: '#FFE298', transform: 'skew(-4deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'94%', width:'94%', transform: 'skew(5deg)' }}>

                                    </Box>
                                </Box>
                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                    Lorem
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Maxime mollitia, 
                                    molestiae quas vel sint commodi 
                                </Typography>
                            </Box>
                            <Box sx={{width: '50%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <Box sx={{width:'300px', height:'250px', backgroundColor: '#BBA4FF', transform: 'skew(-4deg)', display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '40px'  }}>
                                    <Box sx={{backgroundColor:'white', height:'94%', width:'94%', transform: 'skew(5deg)' }}>

                                    </Box>
                                </Box>

                                <Typography sx={{fontWeight:'600', fontSize:'2rem', marginBottom:'40px'}}>
                                    Lorem
                                </Typography>
                                <Typography>
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
                    <Box sx={{width:'80%', height: '90%', margin:'auto', display: 'flex', alignItems: 'center'}}>
                        <Box sx={{margin: 'auto', width:'100%', textAlign:'center'}}>
                            <Typography>
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