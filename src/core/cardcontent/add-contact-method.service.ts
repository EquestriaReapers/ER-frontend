import { CONTACTMETHOD_URL } from "core/cardcontent/config";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { MessageResponse } from "core/profiles/config";

export async function addContactMethod(
  token: string | null,
  name: string
): Promise<MessageResponse> {
  try {
    const response = await axios.post(`${CONTACTMETHOD_URL}/?email=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
