import { Profile } from "core/profiles/types";
import { Box } from "@mui/material";
import ShowProfiles from "./profiles/show-profiles";
import {
  filtersContainer,
  filtersContainerBackground,
  navBarStyles,
  pageContainer,
  profileListContainer,
  searchBarContainer,
} from "./styles/styles";
import Filters from "./filters";
import CatalogueSearchBar from "./components/SearchBar";

const CatalogueContent = ({ profileList }: Props) => {
  return (
    <>
      <Box sx={navBarStyles}>fakenavbar por ahora</Box>

      <Box sx={pageContainer}>
        <Box sx={profileListContainer}>
          <Box sx={filtersContainerBackground}>
            <Box sx={filtersContainer}>
              <Filters />
            </Box>
          </Box>

          <Box sx={{ width: "100%", height: "90%" }}>
            <Box sx={searchBarContainer}>
              <CatalogueSearchBar />
            </Box>
            <ShowProfiles profileList={profileList} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  profileList: Profile[];
}
export default CatalogueContent;
