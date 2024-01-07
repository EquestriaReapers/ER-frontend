import { useErrorToast } from "hooks/use-error-toast";
import { useCallback, useEffect, useState } from "react";
import {
  CareersOption,
  getCareersOptions,
} from "core/profiles/get-careers-options.service";

const useAllCareers = () => {
  const [allCareers, setAllCareers] = useState<CareersOption[]>([]);
  const { showErrorToast } = useErrorToast();

  const getCareers = useCallback(async () => {
    try {
      const data = await getCareersOptions();
      setAllCareers(data);
    } catch (error) {
      showErrorToast(error);
    }
  }, [showErrorToast]);

  useEffect(() => {
    getCareers();
  }, [getCareers]);

  return allCareers;
};

export default useAllCareers;
