import { useCallback } from "react";
import { exportCurriculumPDF } from "../services/profile.service";
import { useErrorToast } from "hooks/use-error-toast";
import { useAuthState } from "hooks/use-auth-state";
import { useSuccessToast } from "hooks/use-success-toast";
import { Profile } from "core/profiles/types";

const useDownloadCurriculumPDF = (profile: Profile) => {
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const { token } = useAuthState();
  const downloadCurriculumPDF = useCallback(async () => {
    try {
      if (!token || !profile) return;

      const response = await exportCurriculumPDF(token, profile.userId);

      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      const link = document.createElement("a");

      link.href = fileURL;
      link.download = `Currículum Vitae ${profile.user.name} ${profile.user.lastname}.pdf`;
      link.click();

      URL.revokeObjectURL(fileURL);

      showSuccessToast("La descarga de su currículum ya inició");
      return response;
    } catch (error) {
      showErrorToast(error);
    }
  }, [profile, showErrorToast, showSuccessToast, token]);
  return { downloadCurriculumPDF };
};

export default useDownloadCurriculumPDF;
