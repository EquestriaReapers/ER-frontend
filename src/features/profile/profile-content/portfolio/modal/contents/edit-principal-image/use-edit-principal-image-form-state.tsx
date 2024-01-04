// En use-edit-principal-image-form-state.ts
import { ChangeEvent, useState } from 'react'

const useEditPrincipalImageState = () => {
  const [imagePrincipal, setImagePrincipal] = useState<File | null>(null)
  const [files, setFiles] = useState<File[]>([])

  const onImagePrincipalChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files) as File[]
      setImagePrincipal(newFiles.length > 0 ? newFiles[0] : null)
      setFiles(newFiles)
    }
  }

  return {
    imagePrincipal,
    setImagePrincipal,
    onImagePrincipalChange,
    files,
    setFiles
  }
}

export default useEditPrincipalImageState
