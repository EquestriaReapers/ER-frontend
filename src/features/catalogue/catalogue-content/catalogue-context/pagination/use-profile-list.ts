import { Profile } from "core/profiles/types";
import { useState } from "react";

const useProfileList = () => {
  const [profileList, setProfileList] = useState<Profile[]>([]);

  return { profileList, setProfileList };
};

export default useProfileList;
