import { Box, Pagination } from "@mui/material";
import SpinnerBlock from "components/spinner-block";
import usePortfolioContext from "./explore-portfolio-context/use-explore-portfolios-context";
import ShowPortfolios from "./show-portfolios";
import { ChangeEvent } from "react";

const PortfoliosList = () => {
  const { loading, pagination, setCurrentPage } = usePortfolioContext();

  return (
    <>
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
              Se han encontrado {pagination.totalItems} proyectos que coinciden
              con tu búsqueda
            </Box>
          )}

          <ShowPortfolios />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
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
    </>
  );
};

export default PortfoliosList;
