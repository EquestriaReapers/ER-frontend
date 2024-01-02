import { useContext } from "react";
import PortfolioModalContext from "../../../modal-context";
import { Portfolio } from "core/profiles/types";
import Box from "@mui/material/Box";
import ProjectItem from "./item";

const ProjectsList = () => {
  const { portfolio } = useContext(PortfolioModalContext);
  return (
    <Box>
      {portfolio.map((item: Portfolio) => {
        return <ProjectItem item={item} />;
      })}
    </Box>
  );
};

export default ProjectsList;
