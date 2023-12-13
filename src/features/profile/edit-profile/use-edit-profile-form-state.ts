import { useEffect, useState, ChangeEvent } from "react";
import useGetProfileInfo from "./use-get-profile-info";

const useEditProfileFormState = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lastname, setLastname] = useState("");
  const [mainTitle, setMainTitle] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };
  const onChangeMainTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMainTitle(event.target.value);
  };



  const { getUserInfo } = useGetProfileInfo({ setName, setDescription, setLastname, setMainTitle });

  useEffect(() => {
    getUserInfo();
  }, []);

  return {
    name,
    description,
    setName,
    setDescription,
    mainTitle,
    setMainTitle,
    lastname,
    setLastname,
    onChangeName,
    onChangeDescription,
    onChangeLastname,
    onChangeMainTitle,
  };
};

export default useEditProfileFormState;
