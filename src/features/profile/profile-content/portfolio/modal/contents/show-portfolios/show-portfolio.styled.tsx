import styled from "styled-components";
import ShowPortfolio from "./show-portfolios.component";

const LG_SIZE = 1200;
const MD_SIZE = 767;
const SM_SIZE = 480;
const XS_SIZE = 380;

export default styled(ShowPortfolio)`
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  .exp-header-container {
    margin-bottom: 12px;
  }

  .exp-show-description {
    max-width: 550px;
    font-size: 16px;
    font-weight: 400;
    color: #444444;
    font-family: Inter;
    word-wrap: break-word;
  }

  @media screen and (max-width: ${LG_SIZE}px) {
    width: 650px;
  }

  @media screen and (max-width: ${MD_SIZE}px) {
    width: 400px;
    .exp-show-description {
      max-width: none;
    }

    .exp-show-button {
      width: 100%;
    }
  }

  @media screen and (max-width: ${SM_SIZE}px) {
    width: 300px;
  }

  @media screen and (max-width: ${XS_SIZE}px) {
    width: 250px;
  }
`;
