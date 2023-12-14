import { Box } from "@mui/material";
import CatalogueContent from "./catalogue-content";
const Catalogue = () => {
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
