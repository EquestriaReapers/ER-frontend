import { FunctionComponent, useContext } from "react";
import PortfolioModalContext from "../modal-context";
import { PortfolioContent } from "../modal-context/types";
import ShowPortfolio from "./show-portfolios/show-portfolios.component";
import DeleteProjectModalContent from "./delete-portfolio/delete-project.component";
import EditProjectModalContent from "./edit-portfolio/edit-project.component";
import AddPortfolioModalContent from "./add-portfolio/add-project.component";

export const PortfolioContentManager: FunctionComponent = () => {
  const { content, aPortfolio } = useContext(PortfolioModalContext);

  switch (content) {
    case PortfolioContent.Show:
      return <ShowPortfolio />;
    case PortfolioContent.Add:
      return <AddPortfolioModalContent />;
    case PortfolioContent.Edit:
      if (!aPortfolio) {
        debugError("aPortfolio is null");
        return null;
      }

      return <EditProjectModalContent project={aPortfolio!} />;
    case PortfolioContent.Delete:
      if (!aPortfolio) {
        debugError("aPortfolio is null");
        return null;
      }

      return <DeleteProjectModalContent projectId={aPortfolio!.id} />;
    default:
      return null;
  }
};

function debugError(message: string) {
  console.error(message);
  alert(message);
}
