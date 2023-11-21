import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useAuthState } from "hooks/use-auth-state";
import { style } from "../styles/styles";
import { deleteProfileSkill } from "../../services/profile.service";

const DeleteSkillModal = ({ skillId }: DeleteSkillProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { token } = useAuthState();

  const onDeleteSkill = async () => {
    try {
      if (token && skillId) {
        const data = await deleteProfileSkill(token, skillId);
        setIsOpen(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="Delete Skills"
        aria-describedby="It is used to delete skills"
      >
        
      </Modal>
    </div>
  );
};

export interface DeleteSkillProps {
  skillId: number;
}

export default DeleteSkillModal;
