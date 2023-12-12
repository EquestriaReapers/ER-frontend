import styled from "styled-components";
import EditProfileModalContent from "./modal-content";

const LG_SIZE = 1200;
const MD_SIZE = 767;
const SM_SIZE = 480;
const XS_SIZE = 380;

export default styled(EditProfileModalContent)`
  width: 550px;
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
