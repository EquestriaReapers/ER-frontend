import React, { createContext, useState } from 'react'
import { Education } from 'core/profiles/types'
import { EducationContent } from './types'

const EducationModalContext = createContext<EducationModalContextI>({
  content: EducationContent.Show,
  setContent: () => {},
  educations: [],
  anEducation: null,
  setAnEducation: () => {},
  loading: false,
  setLoading: () => {}
})

export const EducationContentProvider = ({ children, educations }: Props) => {
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<EducationContent>(
    EducationContent.Show
  )
  const [anEducation, setAnEducation] = useState<Education | null>(null)

  const contextValue = {
    content,
    setContent,
    anEducation,
    educations,
    setAnEducation,
    loading,
    setLoading
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
  setAnEducation: (anEducation: Education | null) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export default EducationModalContext
