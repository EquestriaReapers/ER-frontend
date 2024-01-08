import React, { createContext, useState } from "react";
import { SkillType } from "core/skills/types";

// Creamos un contexto
export const SkillsModalContext = createContext<SkillsModalContextI>({
  skillType: SkillType.Hard,
  loading: false,
  setLoading: () => {},
});

// Proveedor del contexto
export const SkillsModalContextProvider = ({ children, skillType }: Props) => {
  const [loading, setLoading] = useState(false);

  // Proporcionamos el valor del contexto
  const contextValue = {
    skillType,
    loading,
    setLoading,
  };
  return (
    <SkillsModalContext.Provider value={contextValue}>
      {children}
    </SkillsModalContext.Provider>
  );
};

interface Props {
  skillType: SkillType;
  children?: React.ReactNode;
}

export interface SkillsModalContextI {
  skillType: SkillType;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default SkillsModalContextProvider;
