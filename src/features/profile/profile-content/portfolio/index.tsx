import { Box, Typography } from "@mui/material";
import ShowPortfolios from "./show-portfolios";
import useProfileContext from "features/profile/profile-context/use-profile-context";
import PortfolioModalWrapper from "./modal/modal-wrapper";
import { boxTitleStyles } from "../education/styles";

const Portfolio = () => {
  const { isEditable, profile } = useProfileContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "18px", sm: "45px" },
      }}
    >
      <Box sx={boxTitleStyles}>
        <Typography
          variant="h5"
          sx={{
            color: "#000",
            fontFamily: "inter",
            fontSize: { xs: "22px", sm: "30px" },
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          }}
        >
          Portafolio
        </Typography>
        {isEditable && <PortfolioModalWrapper />}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: "18px", sm: "20px" },
        }}
      >
        <ShowPortfolios profile={profile} portfolio={profile.portfolio} />
      </Box>
    </Box>
  );
};

export default Portfolio;
