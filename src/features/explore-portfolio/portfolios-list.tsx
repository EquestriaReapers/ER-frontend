import { Box, Pagination, Stack } from "@mui/material";
import SpinnerBlock from "components/spinner-block";
import usePortfolioContext from "./explore-portfolio-context/use-explore-portfolios-context";
import ShowPortfolios from "./show-portfolios";
import { PortfolioSearchParams } from "./explore-portfolio-context/use-initial-portfolios-search-params";
import { ChangeEvent } from "react";

const PortfoliosList = ({ seed, initialPortfoliosSearchParams }: Props) => {
  const { loading, pagination, setCurrentPage } = usePortfolioContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {loading ? (
        <>
          <SpinnerBlock />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {!!pagination && !!pagination.totalItems && (
            <Box
              sx={{
                fontFamily: "inter",
                fontSize: "0.85rem",
                fontWeight: "400",
                fontColor: "#545454",
              }}
            >
              Se han encontrado {pagination.totalItems} projectos que coinciden
              con tu busqueda
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              my: "46px",
              width: "90%",
              backgroundColor: "#F4F4F4",
              justifyItems: "center",
            }}
          >
            <ShowPortfolios
              seed={seed}
              initialPortfoliosSearchParams={initialPortfoliosSearchParams}
            />
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
          </Box>
        </Box>
      )}
    </Box>
  );
};

interface Props {
  seed: number;
  initialPortfoliosSearchParams: PortfolioSearchParams;
}
export default PortfoliosList;
