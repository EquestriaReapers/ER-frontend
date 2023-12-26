import { ChangeEvent, useState } from "react";

const useSearchBarState = () => {
  const [text, setText] = useState<string | null>("");
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (text === "") {
      setText(null);
    }
  };
  return { text, setText, onChangeText };
};

export default useSearchBarState;
