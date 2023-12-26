import { ChangeEvent, useState } from "react";

const useSearchBarState = () => {
  const [text, setText] = useState("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (text === "") {
      text;
    }
  };
  return { text, onChangeText };
};

export default useSearchBarState;
