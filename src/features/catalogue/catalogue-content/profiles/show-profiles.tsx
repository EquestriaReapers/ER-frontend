import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ShowProfiles = (profileList: Profile[]) => {
  console.log(profileList);
  return (
    <>
      {profileList.profileList.profileList.map((item: Profile) => {
        return (
          <>
            <Box sx={{ paddingTop: "30px", paddingBottom: "10px" }}>
              <ProfileCard profile={item} />
            </Box>
            <Divider sx={{ width: "90%", mx: "auto" }} />
          </>
        );
      })}
    </>
  );
};

export default ShowProfiles;
