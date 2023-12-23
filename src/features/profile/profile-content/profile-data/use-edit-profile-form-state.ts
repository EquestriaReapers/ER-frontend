import { Profile } from "core/profiles/types";
import { useState, ChangeEvent, useEffect } from "react";

const useEditProfileFormState = (profile: Profile) => {
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [lastname, setLastname] = useState<string | undefined>();
  const [mainTitle, setMainTitle] = useState<string | undefined>();

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

  useEffect(() => {
    setName(profile.user.name);
    setLastname(profile.user.lastname);
    setMainTitle(profile.mainTitle);
    setDescription(profile.description);
  }, [profile, setName, setLastname, setMainTitle, setDescription]);

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
