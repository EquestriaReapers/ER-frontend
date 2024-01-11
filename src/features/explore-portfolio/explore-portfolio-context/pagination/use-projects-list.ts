import { Portfolio } from "core/profiles/types";
import { useState } from "react";

const useProjectsList = () => {
  const [projects, setProjects] = useState<Portfolio[]>([]);

  return { projects, setProjects };
};

export default useProjectsList;
