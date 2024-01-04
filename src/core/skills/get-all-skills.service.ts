import { SKILLS_URL } from "./config";
import { Skill } from "core/profiles/types";
import axios from "axios";
import { BackendError } from "app/exceptions";
import DeleteIcon from "@mui/icons-material/Delete";

export async function getAllSkills(
  token: string,
  name: string
): Promise<Skill[]> {
  console.log(token);
  try {
    const response = await axios.get(`${SKILLS_URL}?name=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}
