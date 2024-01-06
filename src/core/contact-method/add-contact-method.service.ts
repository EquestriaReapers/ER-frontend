import { CONTACTMETHOD_URL } from "core/contact-method/config";
import axios from "axios";
import { BackendError } from "app/exceptions";
import { MessageResponse } from "core/profiles/config";

export async function addContactMethod(
  body: addContactBody,
  token: string
): Promise<MessageResponse> {
  try {
    const response = await axios.post(`${CONTACTMETHOD_URL}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface addContactBody {
  email: string;
}
