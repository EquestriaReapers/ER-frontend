import { Box, Pagination, Stack } from "@mui/material";
import ShowProfiles from "./profiles/show-profiles";
import { profileCardResultContainer, searchBarContainer } from "./styles";
import CatalogueSearchBar from "./components/SearchBar";
import { ChangeEvent } from "react";
import SpinnerBlock from "components/spinner-block";
import useCatalogueContext from "./catalogue-context/use-catalogue-context";

const CatalogueBoxList = () => {
  const { loading, pagination, setCurrentPage } = useCatalogueContext();

  return (
    <Box sx={profileCardResultContainer}>
      <Box sx={searchBarContainer}>
        <CatalogueSearchBar />
      </Box>
      {loading ? (
        <>
          <SpinnerBlock />
        </>
      ) : (
        <>
          {!!pagination && !!pagination.totalItems && (
            <Box
              sx={{
                fontFamily: "Inter",
                fontSize: "0.85rem",
                fontWeight: "400",
                fontColor: "#545454",
              }}
            >
              Se han encontrado {pagination.totalItems} profesionales que
              coinciden con tu busqueda
            </Box>
          )}

          <ShowProfiles />

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
        </>
      )}
    </Box>
  );
};

export default CatalogueBoxList;
