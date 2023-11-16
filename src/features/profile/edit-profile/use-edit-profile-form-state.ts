import { useState, ChangeEvent } from "react";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.[0]) {
      setImage(event?.target?.files?.[0]);
    }
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  return {
    name,
    email,
    image,
    description,
    onChangeName,
    onChangeEmail,
    onChangeImage,
    onChangeDescription,
  };
};

export default useEditProfileFormState;
