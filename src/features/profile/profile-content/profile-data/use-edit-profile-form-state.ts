import { Profile } from "core/profiles/types";
import { useState, ChangeEvent, useEffect } from "react";

const useEditProfileFormState = (profile: Profile) => {
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [lastname, setLastname] = useState<string | undefined>();

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  useEffect(() => {
    if (profile.id) setLoaded(true);
    setName(profile.user.name);
    setLastname(profile.user.lastname);
    setDescription(profile.description);
  }, [profile, setName, setLastname, setDescription]);

  return {
    loaded,
    name,
    description,
    setName,
    setDescription,
    lastname,
    setLastname,
    onChangeName,
    onChangeDescription,
    onChangeLastname,
  };
};

export default useEditProfileFormState;
