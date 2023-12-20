import { Pagination, Profile } from "core/profiles/types";
import { useEffect, useState } from "react";
import useGetPaginatedProfiles from "./use-get-paginated-profiles";

const usePaginatedProfilesState = () => {
  const [profileList, setProfileList] = useState<Profile[] | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const { getProfileList } = useGetPaginatedProfiles({
    setProfileList,
    setPagination,
  });

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  return { profileList, pagination };
};

export default usePaginatedProfilesState;
