import styled, { css } from "styled-components";
import { ArrowLeft, Home, Email, Search, Notifications } from "./../../styles/icons";

export const Container = styled.div`
  z-index: 2;
  width: min(600px, 100%);
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background: var(--primary);
  text-align: left;
  align-items: center;
  border-bottom: 1px solid var(--outline);
  padding: 0.5rem 0.8rem;
`;

export const BottomMenu = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--outline);
  background: var(--primary);
  /* padding: 0.5rem min(50px, max(10vw, 10px)); */
  padding: 0.5rem 10vw;
  @media (min-width: 500px) {
    display: none;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  > strong {
    font-size: 1rem;
  }
  > span > {
    font-size: 1rem;
  }
`;
export const ReturnButton = styled.button`
  padding: 0.5rem;
  color: var(--twitter);
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  text-align: center;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const ReturnIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
  &:hover {
    fill: #fff;
  }
`;

const iconsStyle = css`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsStyle}
`;
export const NotifyIcon = styled(Notifications)`
  ${iconsStyle}
`;
export const SearchIcon = styled(Search)`
  ${iconsStyle}
`;
export const EmailIcon = styled(Email)`
  ${iconsStyle}
`;
