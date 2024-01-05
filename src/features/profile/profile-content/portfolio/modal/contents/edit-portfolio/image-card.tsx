import { Card, CardMedia } from "@mui/material";

const ImageCard = ({ imageUrl }: Props) => {
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
        image={imageUrl}
      />
    </Card>
  );
};

interface Props {
  imageUrl: string;
}
export default ImageCard;
