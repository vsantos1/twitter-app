import React from "react";
import { Container, Header, UserInfo, BottomMenu, ReturnButton, ReturnIcon, HomeIcon, EmailIcon, SearchIcon, NotifyIcon } from "./styles";
import UserProfile from "../UserProfile";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <ReturnButton>
          <ReturnIcon />
        </ReturnButton>

        <UserInfo>
          <strong>Vinicius Gabriel</strong>
          <span>999 Tweets</span>
        </UserInfo>
      </Header>
      <UserProfile />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <NotifyIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Feed;
