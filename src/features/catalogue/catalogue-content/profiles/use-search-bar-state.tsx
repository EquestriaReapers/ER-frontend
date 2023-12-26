import { ChangeEvent, useState } from "react";

const useSearchBarState = () => {
  const [text, setText] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return { text, onChangeText };
};

export default useSearchBarState;
