import React from "react";
import { Container, Wrapper } from "./styles";
import Main from "../components/Main";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
        {/* <Sidebar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
