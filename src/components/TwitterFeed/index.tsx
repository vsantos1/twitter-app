import React from "react";
import { Container, Tab, TabCont, Tweets } from "./styles";
import Tweet from "../Tweet";

const TwitterFeed = () => {
  return (
    <Container>
      <TabCont>
        <Tab>Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabCont>

      <Tweets>
        <Tweet
          retweeted="Retweeted"
          user_name="Jose"
          user_url="@jose1"
          user_image="https://picsum.photos/200/300"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste, eligendi consequatur delectus qui iure pariatur voluptatibus nulla aspernatur quod explicabo consequuntur!"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="J. Godbolt"
          user_url="@woqko"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="Lorem"
          user_url="@woqkowqeqwewq"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor "
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="Javier"
          user_url="@woqkowewqe"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="Jadsaer"
          user_url="@wqe"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="Sum"
          user_url="@wxxoqkowewqe"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
        <Tweet
          retweeted="Retweeted"
          user_name="Loremp"
          user_url="@wwewqe"
          user_image="https://picsum.photos/200"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad nemo aperiam at quis atque quaerat officiis iste"
          image_content="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        />
      </Tweets>
    </Container>
  );
};

export default TwitterFeed;
