import { useCallback } from "react";
import { toast } from "sonner";

export function useSuccessToast() {
  const showSuccessToast = useCallback((message: string) => {
    toast.success(message);
  }, []);

  return { showSuccessToast };
}
