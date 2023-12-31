import { Box, Typography } from "@mui/material";
import ShowPortfolios from "./show-portfolios";
import useProfileContext from "features/profile/profile-context/use-profile-context";

const Portfolio = () => {
  const { isEditable, profile } = useProfileContext();
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "#000000",
          fontFamily: "inter",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          textTransform: "capitalize",
        }}
      >
        Portafolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ShowPortfolios portfolio={profile.portfolio} />
      </Box>
    </>
  );
};

export default Portfolio;
