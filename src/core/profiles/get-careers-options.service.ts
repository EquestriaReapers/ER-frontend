import axios from "axios";
import { BackendError } from "app/exceptions";
import { BACKEND_V1_URL } from "app/config";

export const CAREERS_URL = `${BACKEND_V1_URL}/career`;

export async function getCareersOptions(): Promise<CareersOption[]> {
  try {
    const response = await axios.get<CareersDictionary>(CAREERS_URL);
    return Object.entries(response.data).map(([key, value]) => ({
      label: value,
      value: key,
    }));
  } catch (error) {
    throw new BackendError(error);
  }
}

type CareersDictionary = Record<string, string>;

export interface CareersOption {
  label: string;
  value: string;
}
