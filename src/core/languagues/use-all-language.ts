import { Language } from "core/profiles/types";
import { getAllLanguages } from "core/languagues/get-all-languages.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";

const useAllLanguages = (name: string, excludeNames?: string[]) => {
  const [allLanguages, setAllLanguages] = useState<Language[]>([]);
  const { showErrorToast } = useErrorToast();

  const getLanguages = useCallback(async () => {
    try {
      const data = await getAllLanguages(name, excludeNames);
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
