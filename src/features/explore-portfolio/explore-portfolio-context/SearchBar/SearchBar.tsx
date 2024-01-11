import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Typography, styled } from "@mui/material";
import {
  InputBaseStyles,
  PaperStyles,
  SearchButtonStyles,
  SearchIconStyles,
} from "./styles";
import { useEffect, useState } from "react";
import usePortfolioContext from "../use-explore-portfolios-context";

const StyledPaper = styled(Paper)`
  ${PaperStyles}
`;

const StyledSearchIcon = styled(SearchIcon)`
  ${SearchIconStyles}
`;

const StyledInputBase = styled(InputBase)`
  ${InputBaseStyles}
`;

const StyledButton = styled(Button)`
  ${SearchButtonStyles}
`;

const SearchBar = () => {
  const [localSearchText, setLocalSearchText] = useState("");
  const { setSearchText, searchText } = usePortfolioContext();
  useEffect(() => {
    setLocalSearchText(searchText);
  }, [searchText]);

  return (
    <>
      <StyledPaper>
        <StyledSearchIcon />
        <StyledInputBase
          placeholder="Buscador"
          value={localSearchText}
          onChange={(input) => {
            setLocalSearchText(input.target.value);
          }}
        />
      </StyledPaper>
      <StyledButton
        variant="contained"
        onClick={() => {
          setSearchText(localSearchText);
        }}
      >
        <SearchIcon sx={{ display: { sm: "none" } }} />
        <Typography
          sx={{ display: { xs: "none", sm: "flex" }, fontFamily: "inter" }}
        >
          Buscar
        </Typography>
      </StyledButton>
    </>
  );
};

export default SearchBar;
