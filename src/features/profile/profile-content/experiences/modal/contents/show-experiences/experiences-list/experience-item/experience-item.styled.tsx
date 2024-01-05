import styled from "styled-components";
import ExperienceItem from "./experience-item.component.tsx";

export default styled(ExperienceItem)`
  .titleIconStyles {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
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
`;
