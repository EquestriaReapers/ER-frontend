import { useState, ChangeEvent } from "react";

const useContactMethodFormState = () => {
  const [contactMethod, setContactMethod] = useState("");

  const onChangeContactMethod = (event: ChangeEvent<HTMLInputElement>) => {
    setContactMethod(event.target.value);
  };

  return {
    contactMethod,
    setContactMethod,
    onChangeContactMethod,
  };
};

export default useContactMethodFormState;
