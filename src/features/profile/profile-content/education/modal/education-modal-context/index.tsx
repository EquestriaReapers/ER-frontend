import React, { createContext, useState } from 'react'
import { Education } from 'core/profiles/types'
import { EducationContent } from './types'

// Creamos un contexto
const EducationModalContext = createContext<EducationModalContextI>({
  content: EducationContent.Show,
  setContent: () => {},
  educations: [],
  anEducation: null,
  setAnEducation: () => {}
})

// Proveedor del contexto
export const EducationContentProvider = ({ children, educations }: Props) => {
  const [content, setContent] = useState<EducationContent>(
    EducationContent.Show
  )
  const [anEducation, setAnEducation] = useState<Education | null>(null)

  // Proporcionamos el valor del contexto
  const contextValue = {
    content,
    setContent,
    anEducation,
    educations,
    setAnEducation
  }
  return (
    <EducationModalContext.Provider value={contextValue}>
      {children}
    </EducationModalContext.Provider>
  )
}

interface Props {
  educations: Education[]
  children?: React.ReactNode
}

export interface EducationModalContextI {
  content: EducationContent
  setContent: (content: EducationContent) => void
  educations: Education[]
  anEducation: Education | null
  setAnEducation: (anExperience: Education | null) => void
}

export default EducationModalContext
