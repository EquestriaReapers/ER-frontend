import { ChangeEvent, useState } from "react";

const useEditPrincipalImageState = () => {
  const [imagePrincipal, setImagePrincipal] = useState<File | null>();
  const [files, setFiles] = useState<File[]>([]);

  const onImagePrincipalChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImagePrincipal(event.target.files[0]);
      setFiles((prevFiles) => [
        ...prevFiles,
        ...(Array.from(event.target.files) as File[]),
      ]);
    }
  };

  return {
    imagePrincipal,
    setImagePrincipal,
    onImagePrincipalChange,
    files,
    setFiles,
  };
};

export default useEditPrincipalImageState;
