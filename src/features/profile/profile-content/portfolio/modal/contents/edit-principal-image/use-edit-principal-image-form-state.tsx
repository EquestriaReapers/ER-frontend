import { ChangeEvent, useState } from "react";

const useEditPrincipalImageState = () => {
  const [imagePrincipal, setImagePrincipal] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const onImagePrincipalChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files) as File[];
      setImagePrincipal(newFiles.length > 0 ? newFiles[0] : null);
      setFiles(newFiles);
    }
  };
  const onDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: FileList };
  }) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const newFiles = [...files, ...(Array.from(droppedFiles) as File[])];
      const fileList = new DataTransfer();
      newFiles.forEach((file) => fileList.items.add(file));

      onImagePrincipalChange({
        target: { files: fileList.files },
      } as ChangeEvent<HTMLInputElement>);
    }
  };
  const deleteFile = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      onImagePrincipalChange({ target: { files: newFiles } });
      return newFiles;
    });
  };

  return {
    imagePrincipal,
    setImagePrincipal,
    onImagePrincipalChange,
    files,
    setFiles,
    onDragOver,
    onDrop,
    deleteFile,
  };
};

export default useEditPrincipalImageState;
