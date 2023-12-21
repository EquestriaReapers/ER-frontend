import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: #f4f4f4;
  border-radius: 5px;
  height: 36px;
  padding-top: 3px;
  padding-left: 6px;
  flex-shrink: 0;
  box-shadow: none;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: gray;
  @media (max-width: 600px) {
    display: none;
  }
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
  margin-left: 6px;
  border-radius: 5px;
  box-shadow: none;

  @media (min-width: 600px) {
    mx: 12px;
  }
`;

const SearchBar = () => (
  <>
    <StyledPaper>
      <StyledSearchIcon />
      <StyledInputBase placeholder="Buscador" />
    </StyledPaper>
    <StyledButton variant="contained">
      <SearchIcon sx={{ display: { sm: "none" } }} />
      <Typography sx={{ display: { xs: "none", sm:"flex" }, fontFamily:"Inter" }}>Buscar</Typography>
    </StyledButton>
  </>
);

export default SearchBar;
