import { BackendError } from "app/exceptions";
import { toast } from "sonner";

export function useErrorToast() {
  const showErrorToast = (error: unknown) => {
    if (error instanceof BackendError) {
      toast.error(error.message);
    } else if (typeof error === "string") {
      toast.error(error);
    } else {
      toast.error("Ocurrió un error desconocido");
    }
  };

  return { showErrorToast };
}
