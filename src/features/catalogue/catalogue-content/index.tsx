import { Profile } from "core/profiles/types";
import ShowProfiles from "./profiles/show-profiles";

const CatalogueContent = (profileList: Profile[]) => {
  return (
    <>
      <ShowProfiles profileList={profileList} />
    </>
  );
};

export default CatalogueContent;
