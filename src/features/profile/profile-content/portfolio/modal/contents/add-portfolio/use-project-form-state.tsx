import { Dayjs } from "dayjs";
import { ChangeEvent, useCallback, useState } from "react";

const useProjectState = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [newFiles, setNewFiles] = useState<File[]>([]);

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

  const addNewImages = useCallback((files: FileList) => {
    const filesArray = Array.from(files);
    setNewFiles((preNewFiles) => {
      const newNewFilesArray = [...preNewFiles, ...filesArray];

      return newNewFilesArray;
    });
  }, []);

  const onImageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        addNewImages(event.target.files);
      }
    },
    [addNewImages]
  );

  const onDragOver = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { files: FileList };
    }) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      addNewImages(droppedFiles);
    },
    [addNewImages]
  );

  const deleteFile = useCallback((fileToDelete: File) => {
    setNewFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToDelete)
    );
  }, []);

  return {
    title,
    description,
    location,
    dateEnd,
    newFiles,
    onTitleChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    onDragOver,
    onDrop,
    deleteFile,
  };
};

export default useProjectState;
