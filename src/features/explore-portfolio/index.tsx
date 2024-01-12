import { Box } from "@mui/material";
import SpinnerBlock from "components/spinner-block";
import useInitialPortfoliosSearchParams from "./explore-portfolio-context/use-initial-portfolios-search-params";
import PortfoliosContextProvider from "./explore-portfolio-context/context-provider";
import useSeed from "./explore-portfolio-context/use-seed";
import PortfoliosList from "./portfolios-list";
import SearchBar from "./explore-portfolio-context/SearchBar/SearchBar";

const ExplorePortfolio = () => {
  const seed = useSeed();
  const initialPortfoliosSearchParams = useInitialPortfoliosSearchParams();

  if (!seed)
    return (
      <>
        <SpinnerBlock />
      </>
    );
  return (
    <Box>
      <PortfoliosContextProvider
        seed={seed}
        initialPortfoliosSearchParams={initialPortfoliosSearchParams}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            my: "30px",
          }}
        >
          <SearchBar />
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <PortfoliosList />
          </Box>
        </Box>
      </PortfoliosContextProvider>
    </Box>
  );
};

export default ExplorePortfolio;
