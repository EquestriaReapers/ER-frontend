import { useCallback, useEffect, useState } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import { searchPaginatedProfiles } from "core/profiles/get-search-paginated.service";
import { Profile } from "core/profiles/types";

const useGetProfiles = () => {
  const { showErrorToast } = useErrorToast();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const getProfilesInfo = useCallback(async () => {
    try {
      const seed = Math.floor(Math.random() * 1000);
      const data = await searchPaginatedProfiles(1, 6, seed, null);
      setProfiles(data.profiles);
      return data;
    } catch (error) {
      showErrorToast(error);
    }
  }, [showErrorToast]);

  useEffect(() => {
    getProfilesInfo();
  }, [getProfilesInfo]);

  return profiles;
};

export default useGetProfiles;
