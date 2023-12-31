import { FunctionComponent, useContext } from 'react'
import AddExperience from './add-education/add-education.styled.tsx'
import ShowExperience from './show-education/show-education.styled.tsx'
import { EducationContent } from '../education-modal-context/types.ts'
import EducationModalContext from '../education-modal-context/index.tsx'
import EditEducationModalContent from './edit-education/modal-content.component.tsx'
import DeleteEducationModalContent from './delete-education/delete-education.component.tsx'

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

      return <EditEducationModalContent anEducation={anEducation} />
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
  console.error(message)
  alert(message)
}
