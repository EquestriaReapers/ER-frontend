import ProjectCard from "./project-card";
import { Box } from "@mui/material";
import usePortfolioContext from "../explore-portfolio-context/use-explore-portfolios-context";

const ShowPortfolios = () => {
  const { projects } = usePortfolioContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-around",
          lg: "center",
        },
      }}
    >
      {projects.map((project) => (
        <>
          <ProjectCard key={project.id} project={project} />
        </>
      ))}
    </Box>
  );
};

export default ShowPortfolios;
