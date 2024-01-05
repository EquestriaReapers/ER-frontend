import { Card, CardMedia } from "@mui/material";

const ImageCard = ({ file }: Props) => {
  const getObjectUrl = (file: File | string) => {
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return file;
  };
  return (
    <Card>
      <CardMedia
        sx={{
          maxWidth: "150px",
          width: "150px",
          maxHeight: "150px",
          height: "150px",
          borderRadius: "5px",
        }}
        image={getObjectUrl(file)}
      />
    </Card>
  );
};

interface Props {
  file: string | File;
}
export default ImageCard;
