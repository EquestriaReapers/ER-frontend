import { Box } from "@mui/material";
import CatalogueContent from "./catalogue-content";
const Catalogue = () => {
  const profileList = {
    profiles: [
      {
        id: 0,
        userId: 0,
        user: {
          name: "string",
          lastname: "string",
          email: "string",
        },
        description: "string",
        mainTitle: "string",
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
            name: "string",
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
      <Box>
        {" "}
        Background
        <Box>
          {" "}
          Contenedor de Filtros y buscador
          <Box>Filtros</Box>
          <Box>
            <CatalogueContent profileList={profileList} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Catalogue;
