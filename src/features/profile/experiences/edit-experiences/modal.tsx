import { useState } from 'react'
import { Modal, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditExperienceModalContent from './modal-content'

const EditExperienceModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby='edit profile'
        aria-describedby='used to edit profile'
      >
        <div>
          <EditExperienceModalContent setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  )
}

export default EditExperienceModal
