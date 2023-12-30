import { useAuthState } from 'hooks/use-auth-state'
import { useErrorToast } from 'hooks/use-error-toast'
import { useSuccessToast } from 'hooks/use-success-toast'
import { FormEvent, useCallback, useContext } from 'react'
import { EducationContent } from '../../education-modal-context/types'
import ExperiencesModalContext from '../../education-modal-context'
import { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router'
import useProfileContext from 'features/profile/profile-context/use-profile-context'
import { addAProfileEducation } from 'features/profile/services/education/add-profile-education'

const useAddEducationForm = ({ education }: AddEducationFormProps) => {
  const getToken = useGetToken()
  const { showSuccessToast } = useSuccessToast()
  const { showErrorToast } = useErrorToast()
  const { setContent } = useContext(ExperiencesModalContext)
  const { fetchProfile } = useProfileContext()

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        const token = getToken()
        if (!education.title || !education.entity || !education.endDate) {
          showErrorToast('Por favor, rellena todos los campos')
          return
        }

        const data = addAProfileEducation(
          {
            title: education.title,
            entity: education.entity,
            endDate: education.endDate?.format('YYYY-MM-DD')
          },
          token
        )

        setContent(EducationContent.Show)
        showSuccessToast('Experiencia agregada con éxito')
        fetchProfile()

        return data
      } catch (error) {
        showErrorToast(error)
      }
    },
    [
      getToken,
      education,
      setContent,
      showSuccessToast,
      fetchProfile,
      showErrorToast
    ]
  )

  return { onSubmitForm }
}

export interface AddEducationFormProps {
  education: {
    title: string
    entity: string
    endDate?: Dayjs
  }
}

function useGetToken() {
  const navigate = useNavigate()
  const { token } = useAuthState()

  return useCallback(() => {
    if (!token) {
      navigate('/login')
      throw new Error(
        'No se ha encontrado un token local para hacer la peticion'
      )
    }

    return token
  }, [navigate, token])
}

export default useAddEducationForm
