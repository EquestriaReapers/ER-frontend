import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

const useEditProjectState = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [image, setImage] = useState<File[] | null>([]);
  const [files, setFiles] = useState<File[]>([]);

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
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage((prevImages) => [
        ...prevImages,
        ...(Array.from(event.target.files) as File[]),
      ]);
    }
  };

  const onDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: FileList };
  }) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles.length > 0) {
      onImageChange({
        target: { files: [droppedFiles[0]] },
      });
    }
  };

  const deleteFile = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      onImageChange({ target: { files: newFiles } });
      return newFiles;
    });
  };

  return {
    title,
    description,
    location,
    dateEnd,
    image,
    files,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    setFiles,
    onDragOver,
    onDrop,
    deleteFile,
  };
};

export default useEditProjectState;
