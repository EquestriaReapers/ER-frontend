import axios from "axios";
import { BackendError } from "app/exceptions";
import { PROFILES_URL } from "./config/config";

export async function exportCurriculumPDF(token: string, profileId: number) {
  try {
    const response = await axios.get(
      `${PROFILES_URL}/export-pdf/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );

    return response;
  } catch (error) {
    throw new BackendError(error);
  }
}
