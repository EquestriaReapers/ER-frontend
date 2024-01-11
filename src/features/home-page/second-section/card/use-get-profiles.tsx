import { useCallback, useEffect, useState } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import { searchPostPaginatedProfiles } from "core/profiles/get-post-search-paginated.service";
import { Profile } from "core/profiles/types";

const useGetProfiles = () => {
  const { showErrorToast } = useErrorToast();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const getProfilesInfo = useCallback(async () => {
    try {
      const seed = Math.floor(Math.random() * 1000);
      const data = await searchPostPaginatedProfiles({
        currentPaginatedParams: {
          searchText: "",
          page: 1,
          selectedSkills: [],
          isExclusiveSkills: false,
          selectedLanguagues: [],
          isExclusiveLanguague: false,
          selectedLocations: [],
          selectedCareers: [],
        },
        limit: 6,
        seed,
      });
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
