import { Typography } from "@mui/material";
import { useState } from "react";

export default function useModalContentChange() {
  const [content, setContent] = useState(0);

  const renderContent = () => {
    switch (content) {
      case 0:
        return <Typography> Mostrar</Typography>;
      case 1:
        return <Typography> Agregar</Typography>;
      case 2:
        return <Typography> Editar</Typography>;
      case 3:
        return <Typography> Borrar</Typography>;
      default:
        return null;
    }
  };

  return { setContent, renderContent };
}
