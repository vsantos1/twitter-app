import styled, { css } from "styled-components";
import { Twitter, DotsCircleHorizontal, Heart, Upload, ArrowRepeatAll } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border-bottom: 1px solid var(--outlined);
  padding: 1rem 1rem;
`;
export const Retweeted = styled.div`
  display: flex;
  color: var(--gray);
  font-size: 1rem;
  align-items: center;
  padding-left: 2rem;
  &:nth-child(1) {
    &,
    svg path {
      color: var(--gray);
    }
  }
`;
export const Body = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  flex-shrink: 0;
  top: 0;
  left: 0;
`;
export const ImageContent = styled.img`
  flex-shrink: 0;
  display: flex;
  width: 100vw;
  height: 50vw;
  background-position: center;
  background-size: cover;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 2px;
  gap: 4px;
  margin-top: 2px;
  width: 100%;
  padding-left: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  width: 100%;
  border-bottom: 1px solid var(--outline);
  padding: 1rem;
`;
export const Description = styled.div`
  padding-left: 3rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2px;
`;
export const Status = styled.div`
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;

  &:nth-child(1) {
    &,
    span,
    svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    &,
    span,
    svg path {
      color: var(--twitter);
    }
  }
  &:nth-child(3) {
    &,
    span,
    svg path {
      color: var(--like);
    }
  }
  &:hover:nth-child(4) {
    &,
    svg path {
      color: var(--retweet);
    }
  }
`;

export const IconsStyle = css`
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    background: var(--secondary);
    border-radius: 50%;
  }
`;

export const ChatIcon = styled(DotsCircleHorizontal)`
  ${IconsStyle}
`;

export const TwitterIcon = styled(Twitter)`
  ${IconsStyle}
`;

export const HeartIcon = styled(Heart)`
  ${IconsStyle}
`;

export const UploadIcon = styled(Upload)`
  ${IconsStyle}
`;
