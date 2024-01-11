import { getAllLocations } from "./get-all-locations.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";
import { Location } from "core/profiles/types";

const useAllLanguages = (name: string, excludeNames?: string[]) => {
  const [allLanguages, setAllLanguages] = useState<Location[]>([]);
  const { showErrorToast } = useErrorToast();

  const getLanguages = useCallback(async () => {
    try {
      const data = await getAllLocations(name, excludeNames);
      setAllLanguages(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [name, excludeNames, showErrorToast]);

  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  return allLanguages;
};

export default useAllLanguages;
