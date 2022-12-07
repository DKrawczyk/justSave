import { FC } from "react";
import styled from "styled-components";
import { IInterestingEventMock, IPropsStyle } from "../../../utils/interfaces";
import { ArticleHeader } from "../../atoms";

const WebpartWrapper = styled.div<IPropsStyle>`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
  flex-direction: column;
  @media (max-width: 785px) {
    height: 600px;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    width: ${(props) => props.width || "30%"};
    min-height: 700px;
  }
`;

const EventBackground = styled.div<IPropsStyle>`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InterestingNewsWrapper = styled.div`
  height: 100%;
  padding: 24px 0;
  position: relative;
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 100%;
  }
`;

const EventContent = styled.p`
  font-size: 2rem;
  color: white;
`;

const EventDetails = styled.div`
  position: absolute;
  top: calc(0px + 24px);
  width: 60%;
  padding: 30px 0px 30px 30px;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 785px) {
    width: 90%;

  }
  /* @media (max-width: 785px) {
    flex-direction: row;

  } */

`;

const EventBtnLink = styled.a`
  display: inline-block;
  width: 170px;
`;

const EventButton = styled.button`
  background-color: #3ab8b7;
  border: none;
  color: white;
  padding: 18px;
  width: 100%;
`;

export const InterestingEventWebpart: FC<IInterestingEventMock> = ({
  interestingEvents,
}) => {
  const newestInterestingNews = interestingEvents.sort((a, b) => {
    return new Date(a.created) > new Date(b.created) ? -1 : 1;
  });

  return (
    <WebpartWrapper width={"60%"}>
      <ArticleHeader>O tym się mówi</ArticleHeader>
      <InterestingNewsWrapper>
        <EventBackground image={newestInterestingNews[0].imgUrl} />
        <EventDetails>
          <EventContent>{newestInterestingNews[0].content}</EventContent>
          <EventBtnLink href="/">
            <EventButton>Dowiedz się więcej</EventButton>
          </EventBtnLink>
        </EventDetails>
      </InterestingNewsWrapper>
    </WebpartWrapper>
  );
};
