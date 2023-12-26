import { FormEvent, useState, useCallback, useEffect } from 'react'
import { Box, Button, TextField, Modal, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import useEditProfileFormState from './use-edit-profile-form-state'
import { fetchOneProfile, updateProfile } from '../services/profile.service'
import { useAuthState } from 'hooks/use-auth-state'
import { modalStyle } from './styles/styles'

const EditProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { token, user } = useAuthState()

  const {
    name,
    description,
    setName,
    setDescription,
    onChangeName,
    onChangeDescription
  } = useEditProfileFormState()

  const getUserInfo = useCallback(async () => {
    try {
      if (token && user) {
        const data = await fetchOneProfile(user.id)
        setName(data.user.name)
        setDescription(data.description)
      }
    } catch (error) {
      console.log(error)
    }
  }, [setDescription, setName, token, user])

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  const onSubmitForm = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        if (token && user) {
          const data = await updateProfile(token, {
            name,
            description,
            mainTitle: '',
            countryResidence: ''
          })
          setIsOpen(false)
          return data
        }
      } catch (error) {
        console.log(error)
      }
    },
    [description, name, token, user]
  )

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <EditIcon />
        </IconButton>
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={modalStyle}>
          <form onSubmit={onSubmitForm}>
            <TextField
              id='name'
              value={name}
              label='Nombre'
              onChange={onChangeName}
            />

            <TextField
              id='description'
              value={description}
              label='Descripción'
              onChange={onChangeDescription}
            />

            <Button variant='outlined' type='submit'>
              Confirmar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default EditProfileModal
