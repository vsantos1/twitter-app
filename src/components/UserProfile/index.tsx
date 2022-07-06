import React from "react";
import { Container, Banner, Avatar, Dataprofile, CalendarIcon, LocationIcon, Follows, EditButton } from "./styles";
const UserProfile: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <Dataprofile>
        <EditButton outlined={true}> Edit profile</EditButton>

        <h1>Vinicius Gabriel</h1>
        <h2>@vsantos1</h2>
        <p>
          Working at
          <a href="www.google.com" target="_blank">
            @Google
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
    </Container>
  );
};

export default UserProfile;
