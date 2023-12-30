import { useCallback, useEffect, useState } from "react";

// Own
import { useErrorToast } from "hooks/use-error-toast";
import {
  CareersOption,
  getCareersOptions,
} from "core/profiles/get-careers-options.service";

export default function useCareersOptions() {
  const [careersOptions, setCareersOptions] = useState<CareersOption[]>([]);
  const { showErrorToast } = useErrorToast();

  const fetchCareersOptions = useCallback(async () => {
    try {
      const careersOptions = await getCareersOptions();
      setCareersOptions(careersOptions);
    } catch (error) {
      showErrorToast(error);
    }
  }, [showErrorToast]);

  useEffect(() => {
    fetchCareersOptions();
  }, [fetchCareersOptions]);

  return careersOptions;
}
