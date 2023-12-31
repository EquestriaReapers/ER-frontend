import { Portfolio } from "core/profiles/types";
import PortfolioCard from "./portfolio-card";

const ShowPortfolios = ({ portfolio }: Props) => {
  return (
    <>
      {portfolio.map((aPortfolio) => {
        return <PortfolioCard aPortfolio={aPortfolio} />;
      })}
    </>
  );
};
interface Props {
  portfolio: Portfolio[];
}

export default ShowPortfolios;
