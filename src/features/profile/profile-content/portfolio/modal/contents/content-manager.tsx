import { FunctionComponent, useContext } from "react";
import PortfolioModalContext from "../modal-context";
import { PortfolioContent } from "../modal-context/types";

export const PortfolioContentManager: FunctionComponent = () => {
  const { content, aPortfolio } = useContext(PortfolioModalContext);

  switch (content) {
    case PortfolioContent.ShowOne:
      return null;
    case PortfolioContent.Show:
      return null;
    case PortfolioContent.Add:
      return null;
    case PortfolioContent.Edit:
      if (!aPortfolio) {
        debugError("aPortfolio is null");
        return null;
      }

      return null;
    case PortfolioContent.Delete:
      if (!aPortfolio) {
        debugError("aPortfolio is null");
        return null;
      }

      return null;
    default:
      return null;
  }
};

function debugError(message: string) {
  console.error(message);
  alert(message);
}
