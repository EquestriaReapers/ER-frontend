import useProfileContext from "features/profile/profile-context/use-profile-context";
import { PortfolioContentProvider } from "./modal-context";
import PortfolioModal from ".";

const PortfolioModalWrapper = () => {
  const { profile } = useProfileContext();
  return (
    <>
      <PortfolioContentProvider portfolio={profile.portfolio}>
        <PortfolioModal />
      </PortfolioContentProvider>
    </>
  );
};

export default PortfolioModalWrapper;
