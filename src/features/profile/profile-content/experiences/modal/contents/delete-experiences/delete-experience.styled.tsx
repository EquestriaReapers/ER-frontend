import styled from "styled-components";
import DeleteExperienceModalContent from "./delete-experience.component";

export default styled(DeleteExperienceModalContent)`

    .ButtonBox {
        display: flex;
        justify-content: space-evenly;
        margin-top: 12px;
    }

    .LeftButton {
        background-color: rgba(230,0,0,1);
        color: white;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .message {
        font-size: 16px;
        color: #444444;
        text-align: center;
    }
  }
`;
