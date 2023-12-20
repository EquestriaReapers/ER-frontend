import { Typography } from "@mui/material";
import CatalogueContent from "./catalogue-content";
import usePaginatedProfilesState from "./catalogue-content/profiles/use-paginated-profiles-state";

const Catalogue = () => {
  const { profileList, pagination } = usePaginatedProfilesState();
  console.log(pagination);
  return (
    <>
      {profileList ? (
        <CatalogueContent profileList={profileList} />
      ) : (
        <Typography>PAPA PAPA </Typography>
      )}
    </>
  );
};

export default Catalogue;
