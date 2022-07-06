import React from "react";
import { Container, Wrapper } from "./styles";
import Feed from "../components/Feed";
// import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Menu /> */}
        <Feed />
        {/* <Sidebar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
