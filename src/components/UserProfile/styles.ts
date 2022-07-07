import styled, { css } from "styled-components";
import { Cake, Calendar, LockClosed, LocationMarker } from "../../styles/icons";
import img from "../../assets/banner.jpg";
import avatar from "../../assets/avatar.jpg";

interface ButtonProps {
  outlined?: Boolean;
}
export const Container = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: var(--primary);
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`
  z-index: 0;

  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 200px);
  background-image: url(${img});
  background-size: cover;
  position: relative;
`;

export const Avatar = styled.div`
  z-index: 0;

  width: max(45px, min(135px, 20vw));
  height: max(45px, min(135px, 20vw));
  background-image: url(${avatar});
  position: absolute;
  border-radius: 50%;
  background-size: cover;
  border: 0.5rem solid var(--primary);
  bottom: max(-4rem, -10vw);
  left: 1rem;
`;
export const Dataprofile = styled.div`
  // top , left, bottom, left
  z-index: 0;

  padding: min(10vw, 4rem) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 1rem;
  }
  > h2 {
    font-size: 1rem;
    font-weight: normal;
    color: var(--gray);
  }
  > p {
    font-size: 1rem;
    margin-top: 1rem;

    > a {
      padding: 0.5rem;
      text-decoration: none;
      color: var(--twitter);
    }

    > li {
      display: flex;
      align-items: center;
      color: #71767b;
    }
  }
`;

const IconsStyle = css`
  width: 1rem;
  height: 1rem;
  color: var(--gray);
`;
export const CakeIcon = styled(Cake)`
  ${IconsStyle}
`;
export const CalendarIcon = styled(Calendar)`
  ${IconsStyle}
`;
export const LockIcon = styled(LockClosed)`
  ${IconsStyle}
`;
export const LocationIcon = styled(LocationMarker)`
  ${IconsStyle}
`;

export const Follows = styled.div`
  display: flex;

  > span {
    font-size: 1rem;
    margin-right: 1rem;
    color: var(--gray);
  }
  & + span {
    margin-left: 2rem;
  }
`;

export const EditButton = styled.button<ButtonProps>`
  position: absolute;
  top: 2vw;
  right: 0.5rem;
  font-size: 4px;
  text-align: center;
  background: (--twitter);
  color: var(--white);
  border: 1px solid var(--white);
  padding: 0.2rem 1rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  outline: 0;

  @media (min-width: 500px) {
    top: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  &:hover {
    background: var(--secondary);
  }
`;
