import { useContext } from "react";

import { SkillsModalContext } from "./index";

export function useSkillsModalContext() {
  return useContext(SkillsModalContext);
}
