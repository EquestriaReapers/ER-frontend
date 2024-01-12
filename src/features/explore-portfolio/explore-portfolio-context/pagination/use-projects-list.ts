import { useState } from "react";
import { Project } from "../context";

const useProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  return { projects, setProjects };
};

export default useProjectsList;
