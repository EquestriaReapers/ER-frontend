import { BackendError } from "app/exceptions";
import { toast } from "sonner";

export function useErrorToast() {
  const showErrorToast = (error: unknown) => {
    if (error instanceof BackendError) {
      toast.error(error.message);
    } else {
      toast.error("Ocurrio un error desconocido");
    }
  };

  return { showErrorToast };
}
