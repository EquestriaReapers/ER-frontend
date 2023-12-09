import styled from "styled-components";
import ShowExperiences from "./show-experiences.component";

export default styled(ShowExperiences)`
  background: red;

  width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1200px) {
    width: 650px;
  }

  @media screen and (max-width: 767px) {
    width: calc(100vw - 20px);
    margin-left: 10px;
    margin-right: 10px;
  }
`;
