import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

const useProjectState = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [imagePrincipal, setImagePrincipal] = useState("");
  const [image, setImage] = useState<File[] | null>([]);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const onLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const onDateEndChange = (date: Dayjs | null) => {
    setDateEnd(date);
  };
  const onImagePrincipalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImagePrincipal(event.target.value);
  };
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(Array.from(event.target.files));
    }
  };
  return {
    title,
    description,
    location,
    dateEnd,
    imagePrincipal,
    image,
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImagePrincipalChange,
    onImageChange,
  };
};

export default useProjectState;
