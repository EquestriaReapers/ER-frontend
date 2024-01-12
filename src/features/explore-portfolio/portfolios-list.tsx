import { Box, Typography } from "@mui/material";
import SpinnerBlock from "components/spinner-block";
import usePortfolioContext from "./explore-portfolio-context/use-explore-portfolios-context";
import ShowPortfolios from "./show-portfolios";

const PortfoliosList = () => {
  const { loading, pagination } = usePortfolioContext();

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
            justifyItems: "center",
            width: "100%",
            gap: "20px",
          }}
        >
          {!!pagination && !!pagination.totalItems && (
            <Box sx={{ mx: "30px" }}>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "400",
                  fontColor: "#545454",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
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
