import styled from "styled-components";
import AddExperienceModalContent from "./add-experiences";

const LG_SIZE = 1200;
const MD_SIZE = 767;
const SM_SIZE = 480;
const XS_SIZE = 380;

export default styled(AddExperienceModalContent)`
  background: white;
  display: "flex";
  flexdirection: "row";
  flexwrap: "nowrap";

  .single-typefield-box {
    margin-bottom: 12px;
  }

  .enlargement-textfield {
    width: 100%;
  }

  .multiple-typefield-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }

  .multiple-typefield-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }

  .children-box {
    margin-right: 12px;
  }

  .last-children-box {
    flex-grow: 1;
  }

  @media screen and (max-width: ${MD_SIZE}px) {
    .multiple-typefield-box {
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
    }

    .children-box {
      flex-grow: 1;
      margin-right: 0px;
      margin-bottom: 12px;
      
    }
  

`;

//classname = "nombre"
