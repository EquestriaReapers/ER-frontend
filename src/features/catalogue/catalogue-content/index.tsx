import { Profile } from "core/profiles/types";
import { Box, Pagination, Stack } from "@mui/material";
import ShowProfiles from "./profiles/show-profiles";
import {
  filtersContainer,
  filtersContainerBackground,
  navBarStyles,
  pageContainer,
  catalogueContainer,
  searchBarContainer,
} from "./styles/styles";
import Filters from "./filters";
import CatalogueSearchBar from "./components/SearchBar";

const CatalogueContent = ({ profileList }: Props) => {
  return (
    <>
      <Box sx={navBarStyles}>fakenavbar por ahora</Box>

      <Box sx={pageContainer}>
        <Box sx={catalogueContainer}>
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
            <ShowProfiles profileList={profileList} />
            <ShowProfiles profileList={profileList} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                my: "46px",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={100}
                  shape="rounded"
                  color="primary"
                  size="large"
                />
              </Stack>
            </Box>
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
