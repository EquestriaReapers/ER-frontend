import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useState, ChangeEvent } from "react";
import { updateProfileSkill } from "../services/profile.service";
import { useAuthState } from "hooks/use-auth-state";
import { style } from "./styles/styles";


const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { token, user } = useAuthState();

  const [name, setName] = useState("");
  const onChangeSkillName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const userId = user?.id;

  const onSubmitForm = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      if (token && name && userId) {
        const body = {
          userId,
          name,
        };
        const data = await updateProfileSkill(token, body, userId);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <EditIcon />
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
            <TextField
              id="name"
              label="Nombre de la Habilidad"
              variant="standard"
              onChange={onChangeSkillName}
            />

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
