import { BackendError } from "app/exceptions";
import axios from "axios";
import { PROFILES_URL } from "./config";

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
