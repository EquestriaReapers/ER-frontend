import { ChangeEvent, useState } from "react";

const useSearchBarState = () => {
  const [text, setText] = useState<string>("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return { text, setText, onChangeText };
};

export default useSearchBarState;