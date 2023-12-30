import { useCallback } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { Profile } from "core/profiles/types";
import { exportCurriculumPDF } from "core/profiles/export-curriculum-pdf.service";
import useLoaderState from "hooks/use-loader-state";

const useDownloadCurriculumPDF = (profile: Profile) => {
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const loader = useLoaderState();

  return useCallback(async () => {
    try {
      if (!profile) return;

      const response = await exportCurriculumPDF(profile.userId);

      console.log(loader);
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
  }, [profile, showErrorToast, showSuccessToast, loader]);
};

export default useDownloadCurriculumPDF;
