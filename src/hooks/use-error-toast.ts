import { BackendError } from "app/exceptions";
import { useCallback } from "react";
import { toast } from "sonner";

export function useErrorToast() {
  const showErrorToast = useCallback((error: unknown) => {
    if (error instanceof BackendError) {
      if (error.haveDetails()) {
        toast.error(error.details);
        return;
      }

      toast.error(error.message);
    } else if (typeof error === "string") {
      toast.error(error);
    } else {
      toast.error("Ocurrió un error desconocido");
    }
  }, []);

  return { showErrorToast };
}
