import useEditPrincipalImageState from "./use-edit-principal-image-form-state";

const useFileList = () => {
  const { onImagePrincipalChange, setFiles } = useEditPrincipalImageState();
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
      onImagePrincipalChange({
        target: { files: [droppedFiles[0]] },
      });
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
    onDragOver,
    onDrop,
    deleteFile,
  };
};

export default useFileList;
