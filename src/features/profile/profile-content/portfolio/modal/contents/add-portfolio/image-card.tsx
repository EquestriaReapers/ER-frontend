import { Card, CardMedia } from "@mui/material";

const ImageCard = ({ image }: Props) => {
  const objectURL = URL.createObjectURL(image);
  console.log("hola")
  return (
    <Card>
      <CardMedia
        sx={{
          maxWidth: "150px",
          width: "125px",
          maxHeight: "150px",
          height: "125px",
          borderRadius: "5px",
        }}
        image={objectURL}
      />
    </Card>
  );
};

interface Props {
  image: File;
}
export default ImageCard;
