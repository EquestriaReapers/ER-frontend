import {
  Box,
  Typography,
  IconButton,
  Paper,
  InputBase,
  Checkbox,
  FormGroup,
  FormControlLabel,
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
        fakenabar por ahora
      </Box>
      <Box sx={{ backgroundColor: "#EAEAEA", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingTop: 8,
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "30%",
                backgroundColor: "#EAEAEA",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  paddingTop: 2,
                  backgroundColor: "#F4F4F4",
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
            <Box sx={{ width: "100%", height: "90%",  }}>
              <Paper
                component="form"
                sx={{
                  p: "0px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 375,
                  margin: 8,
                  marginTop: "40px",
                  marginBottom: "30px",
                  border: "1px solid #000",
                }}
              >
                <IconButton type="button">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscador"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <CatalogueContent profileList={profileList} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Catalogue;
