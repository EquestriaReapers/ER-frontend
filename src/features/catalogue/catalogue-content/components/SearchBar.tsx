import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Typography, styled } from "@mui/material";
import useSearchBarState from "../profiles/search/use-search-bar-state";
import { Pagination, Profile } from "core/profiles/types";
import useSearchProfileList from "../profiles/search/use-search-profile-list";
import {
  InputBaseStyles,
  PaperStyles,
  SearchButtonStyles,
  SearchIconStyles,
} from "./styles";

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

const SearchBar = ({
  setProfileList,
  setPagination,
  currentPage,
  seed,
}: Props) => {
  const { onChangeText, text } = useSearchBarState();
  const searchProfileList = useSearchProfileList({
    setProfileList,
    setPagination,
    currentPage,
    seed,
    text,
  });

  return (
    <>
      <StyledPaper>
        <StyledSearchIcon />
        <StyledInputBase placeholder="Buscador" onChange={onChangeText} />
      </StyledPaper>
      <StyledButton variant="contained" onClick={searchProfileList}>
        <SearchIcon sx={{ display: { sm: "none" } }} />
        <Typography
          sx={{ display: { xs: "none", sm: "flex" }, fontFamily: "Inter" }}
        >
          Buscar
        </Typography>
      </StyledButton>
    </>
  );
};
interface Props {
  setProfileList: (profileList: Profile[]) => void;
  setPagination: (pagination: Pagination) => void;
  currentPage: number;
  seed: number;
  text: string | null;
}
export default SearchBar;
