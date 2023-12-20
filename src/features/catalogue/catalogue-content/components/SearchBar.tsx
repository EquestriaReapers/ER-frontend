import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 375px;
  padding-left: 4px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 2px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: gray;
`;

const StyledInputBase = styled(InputBase)`
  margin-left: 1px;
  flex: 1;
`;

const StyledButton = styled(Button)`
  color: #000;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const SearchBar = () => (
  <>
    <StyledPaper>
      <StyledSearchIcon />
      <StyledInputBase
        placeholder="Buscador"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </StyledPaper>
    <StyledButton>Buscar</StyledButton>
  </>
);

export default SearchBar;
