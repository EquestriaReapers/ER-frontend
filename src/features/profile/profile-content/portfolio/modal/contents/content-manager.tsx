import { FunctionComponent, useContext } from "react";
import PortfolioModalContext from "../modal-context";
import { PortfolioContent } from "../modal-context/types";
import ShowPortfolio from "./show-portfolios";
import DeleteProjectModalContent from "./delete-portfolio";
import EditProjectModalContent from "./edit-portfolio";
import AddPortfolioModalContent from "./add-portfolio";
import EditPrincipalImageModalContent from "./edit-principal-image";

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
    case PortfolioContent.EditPrincipalImage:
      return <EditPrincipalImageModalContent project={aPortfolio!} />;
    default:
      return null;
  }
};

function debugError(message: string) {
  console.error(message);
  alert(message);
}
