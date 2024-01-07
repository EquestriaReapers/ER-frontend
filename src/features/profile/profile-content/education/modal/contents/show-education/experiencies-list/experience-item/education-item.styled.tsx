import styled from "styled-components";
import EducationItem from "./education-item.component.tsx";

export default styled(EducationItem)`
  .titleIconStyles {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
  }

  .cvButtonStyleTrue {
    color: #007934;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .cvButtonStyleFalse {
    color: #a6d6a8;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .typographyBoxStyles {
    display: flex;
    justify-content: space-between;
  }

  .nameStyles {
    display: flex;
    font-size: 20px;
    font-family: Inter;
    line-height: normal;
    font-style: normal;
    font-weight: 700;
    text-align: left;
  }

  .subtitleStyles {
    font-weight: 700;
    font-size: 16px;
    color: #535353;
    text-transform: capitalize;
    font-family: Inter;
    font-style: normal;
    line-height: normal;
    text-align: left;
    pr: 1;
  }

  .inlineStyles {
    display: flex;
    flexwrap: wrap;
  }

  .itemIconBox {
    display: flex;
    flexwrap: wrap;
  }

  @media (max-width: 767px) {
    .titleIconStyles {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .typographyBoxStyles {
      display: flex;
      justify-content: center;
    }

    .subtitleStyles {
      text-align: center;
    }

    .nameStyles {
      text-align: center;
      justify-content: center;
    }

    .inlineStyles {
      display: flex;
      flexwrap: wrap;
      justify-content: center;
    }

    .titleIconStyles {
      display: flex;
      justify-content: center;
      padding-top: 20px;
      flex-direction: column;
      flex-wrap: wrap;

      .itemIconBox {
        display: flex;
        flexwrap: wrap;
        justify-content: center;
      }
    }
  }
`;
