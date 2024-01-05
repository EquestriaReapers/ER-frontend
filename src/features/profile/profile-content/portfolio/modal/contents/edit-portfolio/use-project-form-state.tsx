import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";

const useEditProjectState = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [image, setImage] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [deletedImages, setDeletedImages] = useState<number[]>([]);

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
      const filesArray = Array.from(event.target.files);
      setImage((prevImages) => [...prevImages, ...filesArray]);
      setFiles((prevImages) => [...prevImages, ...filesArray]);
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

  const deleteFile = async (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      onImageChange({ target: { files: newFiles } });
      setDeletedImages((prevDeletedImages) => [...prevDeletedImages, index]);
      console.log(deletedImages);
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
    deletedImages,
    setTitle,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
    setDeletedImages,
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
