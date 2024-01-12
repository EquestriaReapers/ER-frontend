export const PaperStyles = `
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
}`;

export const SearchIconStyles = `
  color: gray;
  @media (max-width: 600px) {
  display: none;
}`;

export const InputBaseStyles = `
  color: black;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  flex: 1;
`;

export const SearchButtonStyles = `
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
