import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #f4f4f4;
  border-radius: 5px;
  height: 36px;
  padding-top: 3px;
  padding-left: 6px;
  flex-shrink: 0;
  box-shadow: none;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: gray;
`;

const StyledInputBase = styled(InputBase)`
  color: black;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  flex: 1;
`;

const StyledButton = styled(Button)`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 12px;
  border-radius: 5px;
  box-shadow: none;
`;

const SearchBar = () => (
  <>
    <StyledPaper>
      <StyledSearchIcon />
      <StyledInputBase placeholder="Buscador" />
    </StyledPaper>
    <StyledButton variant="contained">Buscar</StyledButton>
  </>
);

export default SearchBar;
