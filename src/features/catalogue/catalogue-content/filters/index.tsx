import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChangeEvent, useState } from "react";
import Chip from "@mui/material/Chip";
import DateRangePicker from "../components/DateRangePicker";
import ClearIcon from "@mui/icons-material/Clear";
import { typographyStyles } from "./styles";
import { Option } from "components/autocomplete-field/autocomplete-field.component";
import AutoCompleteFieldComponent from "components/autocomplete-field/autocomplete-field.component";

const Filters = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const onSelectedCareersChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedCareers(event.target.value as string[]);
  };

  return (
    <Box
      sx={{ mx: "35px", my: "50px", display: "flex", flexDirection: "column" }}
    >
      <Typography
        sx={{ fontWeight: "700", fontSize: "1.25rem", fontFamily: "inter" }}
      >
        Filtrar resultados
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "55px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px",
            }}
          >
            Habilidades
          </Typography>
          <AutoCompleteFieldComponent
            sx={{ width: "100%", background: "white" }}
            label="Buscar carrera"
            useOptions={function (text?: string | null | undefined): Option[] {
              return [];
            }}
            onSelectOption={function (option: Option): void {
              throw new Error("Function not implemented.");
            }}
            onCreateNewOption={function (option: Option): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Box>
            {selectedCareers.map((career) => (
              <Chip
                deleteIcon={<ClearIcon style={{ color: "#545454" }} />}
                color="primary"
                key={career}
                label={career}
                onDelete={() => {}}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: "#D9D9D9",
                  color: "#303030",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  my: "4px",
                  mx: "4px",
                }}
              />
            ))}
          </Box>
        </Box>

        <Typography sx={typographyStyles}>Habilidades</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px",
            }}
          >
            Fecha de Egreso
          </Typography>
          <DateRangePicker />
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
