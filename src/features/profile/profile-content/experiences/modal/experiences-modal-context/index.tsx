import React, { createContext, useState } from "react";
import { Experience } from "core/profiles/types";
import { ExperienceContent } from "./types";

// Creamos un contexto
const ExperiencesModalContext = createContext<ExperiencesModalContextI>({
  content: ExperienceContent.Show,
  setContent: () => {},
  experiences: [],
  anExperience: null,
  setAnExperience: () => {},
  loading: false,
  setLoading: () => {},
});

// Proveedor del contexto
export const ExperiencesContentProvider = ({
  children,
  experiences,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<ExperienceContent>(
    ExperienceContent.Show
  );
  const [anExperience, setAnExperience] = useState<Experience | null>(null);

  // Proporcionamos el valor del contexto
  const contextValue = {
    content,
    setContent,
    anExperience,
    experiences,
    setAnExperience,
    loading,
    setLoading,
  };
  return (
    <ExperiencesModalContext.Provider value={contextValue}>
      {children}
    </ExperiencesModalContext.Provider>
  );
};

interface Props {
  experiences: Experience[];
  children?: React.ReactNode;
}

export interface ExperiencesModalContextI {
  content: ExperienceContent;
  setContent: (content: ExperienceContent) => void;
  experiences: Experience[];
  anExperience: Experience | null;
  setAnExperience: (anExperience: Experience | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default ExperiencesModalContext;
