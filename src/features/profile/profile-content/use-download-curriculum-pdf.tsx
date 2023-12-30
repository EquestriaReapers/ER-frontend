import { useCallback } from "react";
import { useErrorToast } from "hooks/use-error-toast";
import { useSuccessToast } from "hooks/use-success-toast";
import { Profile } from "core/profiles/types";
import { exportCurriculumPDF } from "core/profiles/export-curriculum-pdf.service";
import useLoaderState from "hooks/use-loader-state";
import { useDispatch } from "react-redux";
import { useAuthState } from "hooks/use-auth-state";
import { isloading } from "core/auth/store/loader-slice";

const useDownloadCurriculumPDF = (profile: Profile) => {
  const { showErrorToast } = useErrorToast();
  const { showSuccessToast } = useSuccessToast();
  const loader = useLoaderState();

  const dispatch = useDispatch();

  useCallback(async () => {
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
      dispatch(isloading(true));
      return response;
    } catch (error) {
      showErrorToast(error);
      console.log(error);
    } finally {
      dispatch(isloading(false));
    }
  }, [profile, showErrorToast, showSuccessToast, dispatch, loader]);
};

export default useDownloadCurriculumPDF;
