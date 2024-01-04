// En use-file-list.ts
import { ChangeEvent } from 'react'
import useEditPrincipalImageState from './use-edit-principal-image-form-state'

const useFileList = () => {
  const { onImagePrincipalChange, files } = useEditPrincipalImageState()

  const onDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const onDrop = (event: {
    preventDefault: () => void
    dataTransfer: { files: FileList }
  }) => {
    event.preventDefault()

    const droppedFiles = event.dataTransfer.files

    if (droppedFiles.length > 0) {
      const newFiles = [...files, ...(Array.from(droppedFiles) as File[])]
      const fileList = new DataTransfer()
      newFiles.forEach((file) => fileList.items.add(file))

      onImagePrincipalChange({
        target: { files: fileList.files }
      } as ChangeEvent<HTMLInputElement>)
    }
  }

  const deleteFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    const fileList = new DataTransfer()
    newFiles.forEach((file) => fileList.items.add(file))
    const fileListObject = fileList.files as FileList
    onImagePrincipalChange({
      target: { files: fileListObject }
    } as ChangeEvent<HTMLInputElement>)
  }

  return {
    onDragOver,
    onDrop,
    deleteFile
  }
}

export default useFileList
