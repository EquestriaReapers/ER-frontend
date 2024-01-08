import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import useCatalogueContext from "../catalogue-context/use-catalogue-context";

const ShowProfiles = () => {
  const { profileList } = useCatalogueContext();
  return (
    <>
      {profileList.map((item: Profile) => {
        return (
          <Box key={item.id}>
            <Box sx={{ paddingTop: "30px", paddingBottom: "10px" }}>
              <ProfileCard profile={item} />
            </Box>
            <Divider sx={{ width: "100%" }} />
          </Box>
        );
      })}
    </>
  );
};

export default ShowProfiles;
