import { FunctionComponent, useContext } from 'react'
import AddExperience from './add-education/add-education.styled.tsx'
import ShowExperience from './show-experiences/show-education.styled.tsx'
import EditExperienceModalContent from './edit-experiences/modal-content.styled.tsx'
import DeleteExperienceModalContent from './delete-experiences/delete-experience.styled.tsx'
import { EducationContent } from '../education-modal-context/types.ts'
import EducationModalContext from '../education-modal-context/index.tsx'

export const EducationContentManager: FunctionComponent = () => {
  const { content, anEducation } = useContext(EducationModalContext)

  switch (content) {
    case EducationContent.Show:
      return <ShowExperience />
    case EducationContent.Add:
      return <AddExperience />
    case EducationContent.Edit:
      if (!anEducation) {
        debugError('anExperience is null')
        return null
      }

      return <EditExperienceModalContent anEducation={anEducation} />
    case EducationContent.Delete:
      if (!anEducation) {
        debugError('anExperience is null')
        return null
      }

      return <DeleteExperienceModalContent educationId={education!.id} />
    default:
      return null
  }
}

function debugError(message: string) {
  console.error(message)
  alert(message)
}
