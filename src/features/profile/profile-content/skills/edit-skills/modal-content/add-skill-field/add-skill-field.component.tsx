import { Box } from "@mui/material";
import useAllSkills from "./use-all-skills";
import { Option } from "./use-skill-form-state";
import useAddSkill from "./use-add-skill";
import useAddUnexistsSkill from "./use-add-unexists-skill";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";
import { useSkillsModalContext } from "../../skills-modal-context/use-skills-modal-context";
import { SkillType } from "core/skills/types";

const AddSkillField = () => {
  const { loading, skillType } = useSkillsModalContext();
  const addSkill = useAddSkill();
  const addUnexistsSkill = useAddUnexistsSkill();

  const label =
    skillType === SkillType.Hard
      ? "Buscar habilidades fuertes"
      : "Buscar habilidades blandas";

  return (
    <Box sx={{ display: "flex" }}>
      <AutoCompleteFieldComponent
        sx={{ width: "100%", marginBottom: "16px" }}
        disabled={loading}
        debounceTime={350}
        useOptions={useSkillsSuggestions}
        label={label}
        onSelectOption={(option: Option) => {
          addSkill(+option.value);
        }}
        onCreateNewOption={(option: Option) => {
          addUnexistsSkill(option.value + "");
        }}
        allowNewUserOptions={true}
      />
    </Box>
  );
};

function useSkillsSuggestions(name?: string | null): Option[] {
  const allSkills = useAllSkills(name || "");

  if (!allSkills?.length) return [];

  return allSkills.map((item) => {
    return { value: item.id, label: item.name };
  });
}

export interface Props {
  loading: boolean;
}

export default AddSkillField;
