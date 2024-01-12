import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import {
  usePortfoliosBoxStyles,
  PortfolioBackground,
  usePortfoliosTitleStyles,
  PortfolioSecondLineStyles,
  PortfolioNameStyles,
} from "./styles";
import { Project } from "features/explore-portfolio/explore-portfolio-context/context";

const PortfolioBox = ({ project }: Props) => {
  const PortfoliosBoxStyles = usePortfoliosBoxStyles();
  const PortfoliosTitleStyles = usePortfoliosTitleStyles();

  return (
    <Box sx={PortfoliosBoxStyles}>
      <Box
        component="img"
        src={project.imagePrincipal!}
        sx={PortfolioBackground}
      ></Box>
      <Typography sx={PortfoliosTitleStyles}>{project.title}</Typography>
      <Box sx={PortfolioSecondLineStyles}>
        <Typography sx={PortfolioNameStyles}>
          {project.profile.name} {project.profile.lastname}
        </Typography>
      </Box>
    </Box>
  );
};

interface Props {
  project: Project;
}
export default PortfolioBox;
