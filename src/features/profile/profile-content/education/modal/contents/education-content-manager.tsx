import { FunctionComponent, useContext } from 'react'
import AddExperience from './add-education/add-education.styled.tsx'
import ShowExperience from './show-education/show-education.styled.tsx'

import { EducationContent } from '../education-modal-context/types.ts'
import EducationModalContext from '../education-modal-context/index.tsx'
import EditEducationStyled from './edit-education/edit-education.styled.tsx'
import DeleteEducationModalContent from './delete-education/delete-education.styled.tsx'

export const EducationContentManager: FunctionComponent = () => {
  const { content, anEducation } = useContext(EducationModalContext)

  switch (content) {
    case EducationContent.Show:
      return <ShowExperience />
    case EducationContent.Add:
      return <AddExperience />
    case EducationContent.Edit:
      if (!anEducation) {
        debugError('anEducation is null')
        return null
      }

      return <EditEducationStyled anEducation={anEducation} />
    case EducationContent.Delete:
      if (!anEducation) {
        debugError('anEducation is null')
        return null
      }

      return <DeleteEducationModalContent educationId={anEducation!.id} />
    default:
      return null
  }
}

function debugError(message: string) {
  alert(message)
}
