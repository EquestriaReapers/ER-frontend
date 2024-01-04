import { useAuthState } from 'hooks/use-auth-state'
import { useErrorToast } from 'hooks/use-error-toast'
import { useSuccessToast } from 'hooks/use-success-toast'
import { FormEvent, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useProfileContext from 'features/profile/profile-context/use-profile-context'
import { Dayjs } from 'dayjs'
import PortfolioModalContext from '../../modal-context'
import { PortfolioContent } from '../../modal-context/types'
import { updateProfileProject } from 'core/portfolio/edit-project.service'

const useForm = ({ project, projectId }: EditProjectFormProps) => {
  const { setContent, setLoading } = useContext(PortfolioModalContext)
  const { fetchProfile } = useProfileContext()
  const getToken = useGetToken()
  const { showSuccessToast } = useSuccessToast()
  const { showErrorToast } = useErrorToast()

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        const token = getToken()
        if (
          !project.title ||
          !project.description ||
          !project.location ||
          !project.dateEnd
        ) {
          showErrorToast('Por favor, rellena todos los campos')
          return
        }

        setLoading(true)
        const data = await updateProfileProject(token, projectId, {
          title: project.title,
          description: project.description,
          location: project.location,
          dateEnd: project.dateEnd?.format('YYYY-MM-DD'),
          imagePrincipal: project.imagePrincipal!,
          image: project.image!
        })
        showSuccessToast('Portafolio editada con éxito')
        setContent(PortfolioContent.Show)
        await fetchProfile()
        return data
      } catch (error) {
        showErrorToast(error)
      } finally {
        setLoading(false)
      }
    },
    [
      getToken,
      project.dateEnd,
      project.description,
      project.imagePrincipal,
      project.image,
      project.location,
      project.title,
      setLoading,
      projectId,
      showSuccessToast,
      setContent,
      fetchProfile,
      showErrorToast
    ]
  )

  return onSubmitForm
}

export interface EditProjectFormProps {
  project: {
    title: string
    description: string
    location: string
    dateEnd: Dayjs | null
    imagePrincipal?: File | null
    image: File[] | null
  }
  projectId: number
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

export default useForm
