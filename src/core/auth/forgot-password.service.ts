import axios from "axios";
import { BackendError } from "app/exceptions";
import { BACKEND_V1_URL } from "app/config";
import { MessageResponse } from "core/profiles/config";

const URL = BACKEND_V1_URL + "/auth/email/forgot-password";
console.log(URL);
export default async function forgotPassword(email: string): Promise<MessageResponse> {
    try {
        console.log('email ', email);
      const response = await axios.get(`${URL}/${email}`);
      console.log(`${URL}${email}`);
      return response.data;
    } catch (error) {
      throw new BackendError(error);
    }
}

