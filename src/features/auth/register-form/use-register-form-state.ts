import { useState, ChangeEvent } from "react";

export default function useRegisterFormState() {

  //type InputText = string | null;
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  //const [name, setName] = useState<InputText>(null);
  //const [lastname, setLastname] = useState<InputText>(null);
  //const [email, setEmail] = useState<InputText>(null);
  //const [password, setPassword] = useState<InputText>(null);
  //const [confirmPassword, setConfirmPassword] = useState<InputText>(null);

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }
    

    return {
        name,
        email,
        password,
        confirmPassword,
        onChangeEmail,
        onChangePassword,
        onChangeName,
        onChangeConfirmPassword,
    };
}