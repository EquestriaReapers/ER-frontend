import { Box, Pagination, Stack, Typography } from "@mui/material";
import ShowProfiles from "./profiles/show-profiles";
import {
  filtersContainer,
  pageContainer,
  catalogueContainer,
  searchBarContainer,
} from "./styles";
import Filters from "./filters";
import CatalogueSearchBar from "./components/SearchBar";
import useCatalogueProfiles from "./profiles/use-catalogue";
import { ChangeEvent } from "react";
import useSeed from "./use-seed";
import SpinnerBlock from "components/spinner-block";

const Catalogue = () => {
  const seed = useSeed();
  const {
    profileList,
    pagination,
    setCurrentPage,
    setProfileList,
    setPagination,
    text,
    currentPage,
  } = useCatalogueProfiles(seed);

  return (
    <>
      {!seed ? (
        <Typography>
          <SpinnerBlock />
        </Typography>
      ) : (
        <>
          <Box sx={pageContainer}>
            <Box sx={catalogueContainer}>
              <Box sx={filtersContainer}>
                <Filters />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: { lg: 590, xl: 790 },
                  height: "90%",
                  mx: { xs: "30px", sm: "50px" },
                }}
              >
                <Box sx={searchBarContainer}>
                  <CatalogueSearchBar
                    setProfileList={setProfileList}
                    setPagination={setPagination}
                    currentPage={currentPage}
                    seed={seed}
                    text={text}
                  />
                </Box>
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
                      count={pagination.totalPages}
                      page={pagination.currentPage}
                      shape="rounded"
                      color="primary"
                      size="large"
                      onChange={(_: ChangeEvent<unknown>, value: number) => {
                        setCurrentPage(value);
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Catalogue;
