import { Pagination, Profile } from "core/profiles/types";
import { fetchPaginatedProfiles } from "features/catalogue/services/get-paginated-profiles.service";
import { useAuthState } from "hooks/use-auth-state";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback } from "react";

const useGetPaginatedProfiles = ({ setProfileList, setPagination }: Props) => {
  const { token } = useAuthState();
  const { showErrorToast } = useErrorToast();
  const getProfileList = useCallback(async () => {
    try {
      if (!token) return;
      const response = await fetchPaginatedProfiles(token, 1, 4);
      setProfileList(response.profiles);
      setPagination(response.pagination);
    } catch (error) {
      showErrorToast(error);
    }
  }, [token, setPagination, setProfileList, showErrorToast]);

  return { getProfileList };
};

interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
}
export default useGetPaginatedProfiles;
