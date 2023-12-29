import axios from "axios";
import { BackendError } from "app/exceptions";
import { PROFILES_URL } from "./config/config";

export async function exportCurriculumPDF(profileId: number) {
  try {
    const response = await axios.get(
      `${PROFILES_URL}/export-pdf/${profileId}`,
      {
        responseType: "blob",
      }
    );

    return response;
  } catch (error) {
    throw new BackendError(error);
  }
}
