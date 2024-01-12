import ProjectCard from "./project-card";
import { Box, Pagination } from "@mui/material";
import usePortfolioContext from "../explore-portfolio-context/use-explore-portfolios-context";
import { ChangeEvent } from "react";

const ShowPortfolios = () => {
  const { projects } = usePortfolioContext();
  const { pagination, setCurrentPage } = usePortfolioContext();
  return (
    <>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "10px",
        }}
      >
        <Pagination
          count={pagination.totalPages}
          page={pagination.currentPage}
          shape="rounded"
          color="primary"
          size="large"
          onChange={(_: ChangeEvent<unknown>, value: number) => {
            setCurrentPage(value);
          }}
        />
      </Box>
    </>
  );
};

export default ShowPortfolios;
