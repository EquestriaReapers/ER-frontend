import { toast } from "sonner";

export function useSuccessToast() {
  const showSuccessToast = (message: string) => {
    toast.success(message);
  };

  return { showSuccessToast };
}