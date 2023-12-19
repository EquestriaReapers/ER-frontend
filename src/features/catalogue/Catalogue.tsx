import {
  Box,
  Typography,
  Paper,
  InputBase,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CatalogueContent from "./catalogue-content";

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
        description:
          "Soy emprendedor y un apasionado por la tecnología e innovación, en 2019 co-funde Nextscale, consultora de la que me desempeñe principalmente como product manager y líder técnico",
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

          {
            id: 2,
            name: "React",
            level: "string",
          },
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
      {
        id: 0,
        userId: 0,
        user: {
          name: "Meredith",
          lastname: "Smith",
          email: "meredithsmith@gmail.com",
        },
        description:
          "Soy emprendedor y un apasionado por la tecnología e innovación, en 2019 co-funde Nextscale, consultora de la que me desempeñe principalmente como product manager y líder técnico",
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
      {
        id: 0,
        userId: 0,
        user: {
          name: "Meredith",
          lastname: "Smith",
          email: "meredithsmith@gmail.com",
        },
        description:
          "Soy emprendedor y un apasionado por la tecnología e innovación, en 2019 co-funde Nextscale, consultora de la que me desempeñe principalmente como product manager y líder técnico",
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
      {
        id: 0,
        userId: 0,
        user: {
          name: "Meredith",
          lastname: "Smith",
          email: "meredithsmith@gmail.com",
        },
        description:
          "Soy emprendedor y un apasionado por la tecnología e innovación, en 2019 co-funde Nextscale, consultora de la que me desempeñe principalmente como product manager y líder técnico",
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
      <Box
        sx={{
          boxShadow: "0px 0px 64px 0px rgba(0, 0, 0, 0.07)",
          width: "100%",
          height: "60px",
        }}
      >
        fakenavbar por ahora
      </Box>
      <Box sx={{ backgroundColor: "#EAEAEA", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            py: 8,
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "80%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box
              sx={{
                width: "40%",
                backgroundColor: "#FFFFFF",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  
                  backgroundColor: "#F4F4F4",
                  borderRadius: "0px 4px 4px 0px",
                  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                  height: "100%",
                  paddingTop: "40px", 
                  paddingLeft:"50px"
                }}
              >
                <Typography sx={{ fontWeight: "700", fontSize: "1.25rem" }}>
                  Filtros
                </Typography>

                <Typography
                  sx={{ fontWeight: "700", fontSize: "1rem", paddingTop: 2 }}
                >
                  Carrera
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Carrera 1"
                  />
                  <FormControlLabel control={<Checkbox />} label="Carrera 2" />
                  <FormControlLabel control={<Checkbox />} label="Carrera 3" />
                  <FormControlLabel control={<Checkbox />} label="Carrera 4" />
                </FormGroup>

                <Typography
                  sx={{ fontWeight: "700", fontSize: "1rem", paddingTop: 2 }}
                >
                  select de carrera
                </Typography>

                <Typography
                  sx={{ fontWeight: "700", fontSize: "1rem", paddingTop: 2 }}
                >
                  Habilidades
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "100%", height: "90%" }}>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "50px",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 375,
                    paddingLeft: "4px",
                    backgroundColor: "white",
                    border: "1px solid #000",
                    borderRadius: "2px",
                  }}
                >
                  <SearchIcon sx={{ color: "gray" }} />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscador"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Paper>
                <Button
                  variant="text"
                  sx={{
                    color: "#000",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textTransform: "capitalize",
                  }}
                >
                  Buscar
                </Button>
              </Box>

              <CatalogueContent profileList={profileList} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Catalogue;
