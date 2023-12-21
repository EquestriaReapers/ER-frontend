import { Profile } from "core/profiles/types";
import ProfileCard from "./profile-card";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";

const ShowProfiles = ({ profileList }: Props) => {
  return (
    <>
      {profileList.map((item: Profile) => {
        return (
          <>
            <Box sx={{ paddingTop: "30px", paddingBottom: "10px" }}>
              <ProfileCard profile={item} />
            </Box>
            <Divider sx={{ width: "100%" }} />
          </>
        );
      })}
    </>
  );
};
interface Props {
  profileList: Profile[];
}
export default ShowProfiles;
