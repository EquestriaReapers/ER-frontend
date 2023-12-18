import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ShowProfiles = ({ profileList }: Props) => {
  return (
    <>
      {profileList.profiles.map((item: Profile) => {
        return (
          <Box sx={{ paddingTop: "10px" }}>
            <ProfileCard profile={item} />
            <Divider sx={{width: "90%", mx:"auto"}} />
          </Box>
        );
      })}
    </>
  );
};

export default ShowProfiles;
interface Props {
  profileList: Profile[];
}
