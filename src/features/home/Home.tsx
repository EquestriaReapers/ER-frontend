import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Home = () => {
    return (
        <Box sx={{height:'300vh'}}>
            <Box sx={{width:'100%', height:'65px', backgroundColor:'blue'}}>NavBar falsa</Box>
            <Box sx={{width:'100%', height:'calc(300vh - 65px)'}}>
                <Box sx={{width: '100%', height: '33%', backgroundColor:'white'}}>
                    <Box sx={{width:'80%', margin:'auto', height:'90%'}}>
                        <Box sx={{width:'100%', height:'50%', display:'flex', alignItems:'center'}}>
                            <Box>
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
                            <Box sx={{width:'40%', height:'50%'}}>
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
                            <Box sx={{width:'60%', height:'50%'}}>

                            </Box>

                        </Box>
                    </Box>
                    
                </Box>
                
                <Box sx={{width: '100%', height:'22%' , backgroundColor:'#F4F4F4'}}>
                    <Box sx={{width:'80%', height: '90%', display:'flex', margin:'auto'}}>
                        <Box sx={{width:'50%', height:'100%'}}>
                            .nddfg
                        </Box>
                        <Box sx={{width:'50%', height:'40%'}}>
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
                    <Box>
                        <Typography>Lorem</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Maxime mollitia, 
                            molestiae quas vel sint commodi 
                        </Typography>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
                <Box sx={{width:'100%', height:'12%', backgroundColor:'#A6D6A8'}}>
                </Box>
            </Box>


        </Box>
    )
}

export default Home;