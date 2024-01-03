import { ChangeEvent, useState } from "react";

const useEditPrincipalImageModalContent = () => {
  const [imagePrincipal, setImagePrincipal] = useState<File | null>();
  const onImagePrincipalChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImagePrincipal(event.target.files[0]);
    }
  };
  return { imagePrincipal, setImagePrincipal, onImagePrincipalChange };
};

export default useEditPrincipalImageModalContent;
