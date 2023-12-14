import { Profile } from "core/profiles/types";
import ShowProfiles from "./profiles/show-profiles";

const CatalogueContent = ({ profileList }: Props) => {
  return (
    <>
      <ShowProfiles profileList={profileList} />
    </>
  );
};

export default CatalogueContent;
interface Props {
  profileList: Profile[];
}
