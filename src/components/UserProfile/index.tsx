import React from "react";
import TwitterFeed from "../TwitterFeed";
import { Container, Banner, Avatar, Dataprofile, CalendarIcon, LocationIcon, Follows, EditButton } from "./styles";
const UserProfile = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <Dataprofile>
        <EditButton outlined={true}> Edit profile</EditButton>

        <h1>Vinicius Gabriel</h1>
        <h2>@vsantos7331</h2>
        <p>
          Hello world, open to work...Github
          <a href="www.google.com" target="_blank">
            @vsantos1
          </a>
        </p>
        <ul>
          <li>
            <LocationIcon /> Local
          </li>
          <li>
            <CalendarIcon /> Joined September 2021
          </li>
        </ul>

        <Follows>
          <span>
            <strong>12323</strong> Following
          </span>
          <span>
            <strong>6722132 </strong>Followers
          </span>
        </Follows>
      </Dataprofile>
      <TwitterFeed />
    </Container>
  );
};

export default UserProfile;
