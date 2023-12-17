import { Box, Typography, Link } from "@mui/material";
import CatalogueContent from "./catalogue-content";
import ucabLogo from "./images/ucabLogo.webp"

const Catalogue = () => {
  const profileList = {
    profiles: [
      {
        id: 0,
        userId: 0,
        user: {
          name: "Meredith",
          lastname: "Smith",
          email: "meredithsmith@gmail.com",
        },
        description: "Soy emprendedor y un apasionado por la tecnología e innovación, en 2019 co-funde Nextscale, consultora de la que me desempeñe principalmente como product manager y líder técnico",
        mainTitle: "Ingeniero informático",
        countryResidence: "string",
        experience: [
          {
            id: 0,
            profileId: 0,
            businessName: "string",
            role: "string",
            location: "string",
            description: "string",
            startDate: "2023-12-15T13:11:19.385Z",
            endDate: "2023-12-15T13:11:19.385Z",
          },
        ],
        skills: [
          {
            id: 0,
            name: "HTML",
            level: "string",
          },
          {
            id: 1,
            name: "CSS",
            level: "string",
          },
          {
            id: 2,
            name: "React",
            level: "string",
          },
        ],
        languageProfile: [
          {
            id: 0,
            profileId: 0,
            level: "string",
            languageId: 0,
          },
        ],
        deletedAt: "2023-12-15T13:11:19.385Z",
      },
    ],
    pagination: {
      itemCount: 0,
      totalItems: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0,
      randomSeed: 0,
    },
  };
  return (
    <>
      <Box sx={{backgroundColor:"#EAEAEA", height:"100vh",}}>
        {" "}
        {/*Background*/}
        <Box>
          
        </Box>
        <Box sx={{height:"75px", width:'100%', backgroundColor:'#FFFFFF', display:'flex', justifyContent:'space-between', alignItems:'center'}}> <Box sx={{marginLeft:'100px'}}><img src={ucabLogo} style={{height:'40px', width:'125px'}}alt="" /></Box> <Box sx={{marginRight:'100px'}}> <a href="#">Home</a> <a href="#">Catalogo</a> <a href="#">Mi perfil</a> <a href="#">Salir</a></Box> </Box>
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', height:'90%'}}>
          <Box sx={{width:'1000px', height:'600px', backgroundColor:'#FFFFFF', display:'flex'}}>
            {" "}
            {/*Contenedor de Filtros y buscador*/}
            <Box sx={{width:'350px', backgroundColor:'#F4F4F4', height:'100%'}}>
              <Typography sx={{fontWeight:'700', fontSize:'1rem'}}>Filtros</Typography>
            </Box>
            <Box sx={{width:'100%'}}>
              <CatalogueContent profileList={profileList} />
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  );
};

export default Catalogue;