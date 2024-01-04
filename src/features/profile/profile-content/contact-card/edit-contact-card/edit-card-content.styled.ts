import styled from "styled-components";
import EditCardComponent from "./edit-card-content.component";

const LG_SIZE = 800;
const MD_SIZE = 767;
const SM_SIZE = 480;
const XS_SIZE = 380;

export default styled(EditCardComponent)`
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  .inputStyles {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  .inputContainer {
    padding: 5px 0px 5px 0px;
    flex: 1;
  }

  .fieldsStyle {
    border-radius: 6px;
    margin-bottom: 16px;
  }

  .iconStyle {
    font-size: 20px;
    margin-right: 2px;
  }

  .pr-5px {
    padding-right: 5px;
  }
  .pl-5px {
    padding-left: 5px;
  }

  .exp-header-container {
    margin-bottom: 12px;
  }

  .exp-show-description {
    max-width: 350px;
  }

  .contact-card-style {
    width: 100%;
    margin-bottom: 12px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: row;
    border-radius: 2px;
    justify-content: space-between;
  }

  .contact-cardText-style {
    color: #535353;
    font-family: inter;
    font-weight: 600;
    padding: 8px 8px 8px 8px;
  }

  .contact-cardDelete-style {
    color: #007935;
  }

  @media screen and (max-width: ${LG_SIZE}px) {
    width: 500px;
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

    .inputStyles {
      display: flex;
      flex-direction: column;
    }

    .pr-5px {
      padding-right: 0px;
    }
    .pl-5px {
      padding-left: 0px;
    }
  }

  @media screen and (max-width: ${XS_SIZE}px) {
    width: 250px;
  }
`;
