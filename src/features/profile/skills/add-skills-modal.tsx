import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useState, ChangeEvent } from "react";
import { useAuthState } from "hooks/use-auth-state";
import { style } from "./styles/styles";
import  MenuItem  from "@mui/material/MenuItem";
const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { token, user } = useAuthState();

  const userId = user?.id;

  const onSubmitForm = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      console.log("hola");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="agregar habilidades"
        aria-describedby="se usa para agregar habilidades"
      >
        <Box sx={style}>
          <form onSubmit={() => onSubmitForm}>
            <Select>
              <MenuItem >Ten</MenuItem>
              <MenuItem >Twenty</MenuItem>
              <MenuItem >Thirty</MenuItem>
            </Select>
            <Button variant="outlined" type="submit">
              Confirmar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddSkillsModal;
