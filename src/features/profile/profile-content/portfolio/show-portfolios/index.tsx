import { Portfolio } from "core/profiles/types";
import ProjectCard from "./project-card";
import { Box } from "@mui/material";

const ShowPortfolios = ({ portfolio }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "space-around",
          lg: "flex-start",
          xl: "flex-start",
        },
      }}
    >
      {portfolio.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Box>
  );
};
interface Props {
  portfolio: Portfolio[];
}

export default ShowPortfolios;
