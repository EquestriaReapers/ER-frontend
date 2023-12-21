import { Pagination, Profile } from "core/profiles/types";
import { useState } from "react";

const usePaginatedProfilesState = () => {
  const [profileList, setProfileList] = useState<Profile[] | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  return { profileList, pagination, setProfileList, setPagination };
};

export default usePaginatedProfilesState;
