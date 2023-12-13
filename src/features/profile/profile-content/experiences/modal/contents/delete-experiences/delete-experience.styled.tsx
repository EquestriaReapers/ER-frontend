import styled from "styled-components";
import DeleteExperienceModalContent from "./delete-experience.component";

export default styled(DeleteExperienceModalContent)`

    .button-box {
        display: flex;
        justify-content: space-evenly;
        margin-top: 12px;
    }

    .left-button {
        background-color: #b8b8b8;
        color: white;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .right-button {
        background-color: #007935;
    }

    .message {
        font-size: 16px;
        color: #444444;
        text-align: center;
    }
  }
`;
