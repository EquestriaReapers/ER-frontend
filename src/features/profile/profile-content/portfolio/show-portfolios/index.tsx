import PortfolioCard from "./portfolio-card";

const ShowPortfolios = ({ portfolios }) => {
  console.log(portfolios);
  return (
    <>
      {portfolios.map((portfolio) => {
        return <PortfolioCard portfolio={portfolio} />;
      })}
    </>
  );
};

export default ShowPortfolios;
