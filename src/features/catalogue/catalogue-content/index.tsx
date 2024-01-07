import { Box } from "@mui/material";
import { filtersContainer, pageContainer, catalogueContainer } from "./styles";
import Filters from "./filters";
import useSeed from "./use-seed";
import SpinnerBlock from "components/spinner-block";
import CatalogueContextProvider from "./catalogue-context/CatalogueContextProvider";
import CatalogueBoxList from "./catalogue-box-list";
import useInitialCatalogueSearchParams from "./use-initial-catalogue-search-params";

const Catalogue = () => {
  const seed = useSeed();

  const initialCatalogueSearchParams = useInitialCatalogueSearchParams();

  if (!seed)
    return (
      <>
        <SpinnerBlock />
      </>
    );

  return (
    <Box sx={pageContainer}>
      <CatalogueContextProvider
        seed={seed}
        initialCatalogueSearchParams={initialCatalogueSearchParams}
      >
        <Box sx={catalogueContainer}>
          <Box sx={filtersContainer}>
            <Filters />
          </Box>
          <CatalogueBoxList />
        </Box>
      </CatalogueContextProvider>
    </Box>
  );
};

export default Catalogue;
