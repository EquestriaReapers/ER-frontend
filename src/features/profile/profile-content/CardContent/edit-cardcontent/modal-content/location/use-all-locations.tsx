import { getAllLocations } from "core/cardcontent/get-all-locations.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";

const useAllLocations = (name: string) => {
  const [allLocations, setAllLocations] = useState<String[] | null>(null);
  const { showErrorToast } = useErrorToast();

  const getLocations = useCallback(async () => {
    try {
      if (!name) {
        setAllLocations([]);
        return;
      }
      const data = await getAllLocations(name);
      setAllLocations(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [name, showErrorToast]);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return allLocations;
};

export default useAllLocations;
