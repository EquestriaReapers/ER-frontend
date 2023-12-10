import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import { style } from '../styles/styles'
import FormContent from './form-content'
import { useState } from 'react'

const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby='agregar habilidades'
        aria-describedby='se usa para agregar habilidades'
      >
        <Box sx={style}>
          <FormContent setIsOpen={setIsOpen} />
        </Box>
      </Modal>
    </div>
  )
}

export default AddSkillsModal
