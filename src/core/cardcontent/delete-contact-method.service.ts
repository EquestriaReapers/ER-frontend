import { CONTACTMETHOD_URL } from "core/cardcontent/config";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { MessageResponse } from "core/profiles/config";

export async function deleteContactMethod(
  token: string,
  contactId: number
): Promise<MessageResponse> {
  try {
    const response = await axios.delete(`${CONTACTMETHOD_URL}/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
