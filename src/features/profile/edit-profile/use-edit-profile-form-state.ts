import { useEffect, useState, ChangeEvent } from "react";
import useGetProfileInfo from "./use-get-profile-info";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const { getUserInfo } = useGetProfileInfo({ setName, setDescription });

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return {
    name,
    description,
    setName,
    setDescription,
    onChangeName,
    onChangeDescription,
  };
};

export default useEditProfileFormState;
