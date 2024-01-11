import ProjectCard from "./project-card";
import { Box, Typography } from "@mui/material";
import usePortfolioContext from "../explore-portfolio-context/use-explore-portfolios-context";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { searchPostPaginatedPortfolios } from "core/portfolio/search-projects.service";
import { PortfolioSearchParams } from "../explore-portfolio-context/use-initial-portfolios-search-params";

const ShowPortfolios = ({ seed, initialPortfoliosSearchParams }: Props) => {
  const { projects, pagination } = usePortfolioContext();
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const getMoreProjects = () => {
    if (items.length >= projects.length) {
      setHasMore(false);
      return;
    }
    try {
      const data = searchPostPaginatedPortfolios({});
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
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
      {/* 
      <InfiniteScroll
        dataLength={items.length}
        next={getMoreProjects}
        hasMore={hasMore}
        endMessage={<Typography> No hay proyectos!</Typography>}
        loader={<Typography> Cargando...</Typography>}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </InfiniteScroll>
      */}

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Box>
  );
};

interface Props {
  seed: number;
  initialPortfoliosSearchParams: PortfolioSearchParams;
}

export default ShowPortfolios;
