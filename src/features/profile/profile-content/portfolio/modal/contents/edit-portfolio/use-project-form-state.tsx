import { Dayjs } from "dayjs";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const useEditProjectState = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);
  const [image, setImage] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [deletedImages, setDeletedImages] = useState<number[]>([]);
  const [previousImages, setPreviousImages] = useState<PreviousImage[]>([]);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
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

  const updatePreviousImages = useCallback(() => {
    const _projectImages = image || [];

    const _withoutDeletedAllImages = [
      ..._projectImages.map((image: string, index: number) => ({
        previewUrl: image,
        type: TypeImage.Online,
        index,
      })),
      ...newFiles.map((file, index: number) => ({
        previewUrl: URL.createObjectURL(file),
        type: TypeImage.Local,
        index,
      })),
    ];

    const previousImages = _withoutDeletedAllImages.filter((item) => {
      if (item.type === TypeImage.Local) return true;
      // comprobar que el indice no este dentro de deletedImages
      return !deletedImages.includes(item.index);
    });

    setPreviousImages(previousImages);
  }, [deletedImages, image, newFiles]);

  useEffect(() => {
    updatePreviousImages();
  }, [updatePreviousImages]);

  const addNewImages = useCallback((files: FileList) => {
    const filesArray = Array.from(files);
    setNewFiles((preNewFiles) => {
      const newNewFilesArray = [...preNewFiles, ...filesArray];

      return newNewFilesArray;
    });
  }, []);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addNewImages(event.target.files);
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
    addNewImages(droppedFiles);
  };

  const deleteFile = async (previousImage: PreviousImage) => {
    if (previousImage.type === TypeImage.Online) {
      setDeletedImages((prevDeletedImages) => [
        ...prevDeletedImages,
        previousImage.index,
      ]);
    } else {
      newFiles.splice(previousImage.index, 1);
    }
  };

  return {
    title,
    url,
    description,
    location,
    dateEnd,
    image,
    newFiles,
    deletedImages,
    previousImages,
    setTitle,
    setUrl,
    setDescription,
    setLocation,
    setDateEnd,
    setImage,
    setDeletedImages,
    onTitleChange,
    onUrlChange,
    onDescriptionChange,
    onLocationChange,
    onDateEndChange,
    onImageChange,
    setNewFiles,
    onDragOver,
    onDrop,
    deleteFile,
    setPreviousImages,
  };
};

export enum TypeImage {
  Local = "local",
  Online = "online",
}

export interface PreviousImage {
  previewUrl: string;
  type: TypeImage;
  index: number;
}

export default useEditProjectState;
