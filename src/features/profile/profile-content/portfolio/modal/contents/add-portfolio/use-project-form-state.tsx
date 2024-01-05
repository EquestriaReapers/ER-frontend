import { Dayjs } from "dayjs";
import { ChangeEvent, useCallback, useState } from "react";

const useProjectState = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [imagePrincipal, setImagePrincipal] = useState<File | null>(null);
  const [image, setImage] = useState<File[]>([]);

  const onTitleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);
  const onDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    []
  );
  const onLocationChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLocation(event.target.value);
    },
    []
  );
  const onDateEndChange = useCallback((date: Dayjs | null) => {
    setDateEnd(date);
  }, []);
  const onImagePrincipalChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setImagePrincipal(event.target.files?.[0] || null);
    },
    []
  );
  const onImageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImage((prevImages) => {
        return [...prevImages, ...filesArray];
      });
    }
  }, []);

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
