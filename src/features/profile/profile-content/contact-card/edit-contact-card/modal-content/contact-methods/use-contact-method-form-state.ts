import { useState, ChangeEvent, useCallback } from "react";

const useContactMethodFormState = () => {
  const [contactMethod, setContactMethod] = useState("");

  const onChangeContactMethod = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setContactMethod(event.target.value);
    },
    []
  );

  return {
    contactMethod,
    setContactMethod,
    onChangeContactMethod,
  };
};

export default useContactMethodFormState;
