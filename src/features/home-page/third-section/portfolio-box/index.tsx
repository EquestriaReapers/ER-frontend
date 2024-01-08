import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  usePortfoliosBoxStyles,
  PortfolioBackground,
  usePortfoliosTitleStyles,
  PortfolioSecondLineStyles,
  PortfolioNameStyles,
  PortfolioInsideSecondLine,
  PortfolioViewsNumber,
  PortfolioViewsNumberIcon,
} from "./styles";

const PortfolioBox = () => {
  const PortfoliosBoxStyles = usePortfoliosBoxStyles();
  const PortfoliosTitleStyles = usePortfoliosTitleStyles();

  return (
    <Box sx={PortfoliosBoxStyles}>
      <Box sx={PortfolioBackground}></Box>
      <Typography sx={PortfoliosTitleStyles}>
        Portfolio incredible title
      </Typography>
      <Box sx={PortfolioSecondLineStyles}>
        <Typography sx={PortfolioNameStyles}>John Doe</Typography>
        <Box sx={PortfolioInsideSecondLine}>
          <Typography sx={PortfolioViewsNumber}>300</Typography>
          <RemoveRedEyeIcon sx={PortfolioViewsNumberIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioBox;
