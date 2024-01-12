import { searchPostPaginatedPortfolios } from "core/portfolio/search-projects.service";
import { Project } from "features/explore-portfolio/explore-portfolio-context/context";
import { useErrorToast } from "hooks/use-error-toast";
import { useState, useCallback, useEffect } from "react";

const useGetProjects = () => {
  const { showErrorToast } = useErrorToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const getProjectsInfo = useCallback(async () => {
    try {
      const seed = Math.floor(Math.random() * 1000);
      const data = await searchPostPaginatedPortfolios({
        currentPaginatedParams: {
          searchText: "",
          page: 1,
          selectedCareers: [],
        },
        limit: 6,
        seed,
      });
      setProjects(data.portfolios);
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  }, [showErrorToast]);

  useEffect(() => {
    getProjectsInfo();
  }, [getProjectsInfo]);

  return projects;
};

export default useGetProjects;
