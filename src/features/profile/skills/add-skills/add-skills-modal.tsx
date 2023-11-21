import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useState, FormEvent, useEffect, useCallback } from "react";
import { useAuthState } from "hooks/use-auth-state";
import { style } from "../styles/styles";
import MenuItem from "@mui/material/MenuItem";
import { getAllSkills } from "../../services/skills.service";
import { Skill } from "core/profiles/types";
import { updateProfileSkill } from "../../services/profile.service";
const AddSkillsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allSkills, setAllSkills] = useState<Skill[] | null>(null);
  const [selectedSkillId, setSelectedSkillId] = useState("");

  const onSkillChange = (event: SelectChangeEvent) => {
    setSelectedSkillId(event.target.value);
  };
  const { token } = useAuthState();

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!token || !selectedSkillId) return;
      const skillId = parseInt(selectedSkillId);
      console.log(skillId)
      const data = await updateProfileSkill(token, { skillId });
      setIsOpen(false)
      return data
    } catch (error) {
      console.log(error);
    }
  };

  const getSkills = useCallback(async () => {
    try {
      if (token) {
        const data = await getAllSkills(token);
        setAllSkills(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

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
          <form onSubmit={onSubmitForm}>
            <Select value={selectedSkillId} onChange={onSkillChange}>
              {allSkills &&
                allSkills.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
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
