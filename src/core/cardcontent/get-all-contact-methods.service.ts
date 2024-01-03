import { ContactMethod } from "core/profiles/types";
import { BACKEND_V1_URL } from "app/config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function getAllContactMethods(
  profileId: number
): Promise<ContactMethod[]> {
  try {
    const response = await axios.get(
      `${BACKEND_V1_URL}/profiles?id=${profileId}`,
      {}
    );
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
