import { BACKEND_V1_URL } from "app/config";

export const PROFILES_URL = `${BACKEND_V1_URL}/profiles`;

export interface MessageResponse {
  message: string;
}
