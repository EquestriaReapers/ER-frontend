import axios from "axios";
import { BackendError } from "app/exceptions";
import { BACKEND_V1_URL } from "app/config";
import { MessageResponse } from "core/profiles/config";

const URL = BACKEND_V1_URL + "/auth/reset-password";

export default async function newPassword(  
    password: string,
    token: string
    ): Promise<MessageResponse> {
    try {
      const response = await axios.post(`${URL}/${token}`, {newPassword:password});
      return response.data;
    } catch (error) {
      throw new BackendError(error);
    }
}

