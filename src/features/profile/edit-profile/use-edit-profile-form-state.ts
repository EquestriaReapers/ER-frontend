import useGetProfileInfo from "./use-get-profile-info";
import { useEffect, useState, ChangeEvent } from "react";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mainTitle, setMainTitle] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onChangeMainTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMainTitle(event.target.value);
  };

  const { getUserInfo } = useGetProfileInfo({ setName, setDescription });

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return {
    name,
    description,
    mainTitle,
    setName,
    setDescription,
    setMainTitle,
    onChangeName,
    onChangeDescription,
    onChangeMainTitle,
  };
};

export default useEditProfileFormState;
