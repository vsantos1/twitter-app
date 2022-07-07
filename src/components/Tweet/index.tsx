import React from "react";
import { Container, Retweeted, Avatar, Header, Body, TwitterIcon, Description, Content, ChatIcon, HeartIcon, Icons, Status, UploadIcon } from "./styles";

interface TweetProps {
  retweeted: string;
  user_name: string;
  user_url: string;
  user_image: string;
  description?: string;
  image_content?: string;
}

const Tweet = ({ retweeted, user_name, user_image, user_url, description, image_content }: TweetProps) => {
  const dateTime = Date.now();
  const date = new Date(dateTime);

  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        {retweeted}
      </Retweeted>
      <Body>
        <Header>
          <strong> {user_name}</strong>
          <span>{user_url}</span>
          <time> {date.toLocaleDateString()}</time>
        </Header>
        <Description>{description}</Description>

        <Content>
          <Avatar src={user_image} alt="User image from twitter" />

          <Icons>
            <Status>
              <ChatIcon />

              <span>3330</span>
            </Status>
            <Status>
              <TwitterIcon />

              <span>252</span>
            </Status>
            <Status>
              <HeartIcon />
              <span>9.953</span>
            </Status>
            <Status>
              <UploadIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
