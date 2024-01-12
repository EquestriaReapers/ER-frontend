import { Box, Typography } from "@mui/material";
import SpinnerBlock from "components/spinner-block";
import usePortfolioContext from "./explore-portfolio-context/use-explore-portfolios-context";
import ShowPortfolios from "./show-portfolios";
import {
  explorePortfoliosListStyles,
  searchMessageStyles,
} from "./styles/portfolios-list-styles";

const PortfoliosList = () => {
  const { loading, pagination } = usePortfolioContext();

  return (
    <>
      {loading ? (
        <>
          <SpinnerBlock />
        </>
      ) : (
        <Box sx={explorePortfoliosListStyles}>
          {!!pagination && !!pagination.totalItems && (
            <Box sx={{ mx: "30px" }}>
              <Typography sx={searchMessageStyles}>
                Se han encontrado {pagination.totalItems} proyectos que
                coinciden con tu búsqueda
              </Typography>
            </Box>
          )}

          <ShowPortfolios />
        </Box>
      )}
    </>
  );
};

export default PortfoliosList;
