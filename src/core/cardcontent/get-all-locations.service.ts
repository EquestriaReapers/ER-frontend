import { LOCATION_URL } from "./config";
import axios from "axios";
import { BackendError } from "app/exceptions";

export async function getAllLocations(name: string): Promise<String[]> {
  try {
    const response = await axios.get(`${LOCATION_URL}?name=${name}`, {});
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
