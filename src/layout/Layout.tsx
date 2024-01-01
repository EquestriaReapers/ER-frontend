import Navbar from "components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const Layout = ({ className }: Props) => {
  return (
    <Div100vh className={className}>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </Div100vh>
  );
};

interface Props {
  className?: string;
}

export default styled(Layout)`
  display: flex;
  flex-direction: column;

  #detail {
    flex: 1;
  }
`;
