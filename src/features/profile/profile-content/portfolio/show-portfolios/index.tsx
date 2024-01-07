import { Portfolio } from "core/profiles/types";
import ProjectCard from "./project-card";

const ShowPortfolios = ({ portfolio }: Props) => {
  return (
    <>
      {portfolio.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </>
  );
};
interface Props {
  portfolio: Portfolio[];
}

export default ShowPortfolios;
