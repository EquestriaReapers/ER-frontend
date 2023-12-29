import { BackendError } from "app/exceptions";
import { useCallback } from "react";
import { toast } from "sonner";

export function useErrorToast() {
  const showErrorToast = useCallback((error: unknown) => {
    if (error instanceof BackendError) {
      toast.error(error.message);
    } else {
      toast.error("Ocurrio un error desconocido");
    }
  }, []);

  return { showErrorToast };
}
