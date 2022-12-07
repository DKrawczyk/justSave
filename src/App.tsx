import React, { FC } from "react";
import styled from "styled-components";
import { mockedEmployees } from "./assets/mocks/mockedEmployees";
import { mockedInterestingEvents } from "./assets/mocks/mockedInterestingEvents";
import { mockedJobOffers } from "./assets/mocks/mockedJobOffers";
import { mockedSocialMedias } from "./assets/mocks/mockedSocialMedias";
import { Menu, NewsWebpart } from "./components/";
import {
  InterestingEventWebpart,
  JobOffers,
  NewEmployees,
  SocialMediaWebpart,
} from "./components/organisms";

const PageWrapper = styled.div``;

const TemporaryFirstWrapper = styled.div`
  display: flex;
  background-color: rgb(241, 241, 241);
  @media (max-width: 785px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-around;
  }
  @media (min-width: 1280px) {
    justify-content: flex-end;
    padding: 30px 100px;
  }
`;

const TemporarySecondWrapper = styled.div`
  /* padding: 30px 100px; */
  display: flex;
  flex-direction: column;

  @media (min-width: 1279px) {
    flex-direction: row;
  } /* min-height: 200px; */
`;

export const App: FC = () => {
  return (
    <PageWrapper>
      <Menu />
      <NewsWebpart />
      <TemporaryFirstWrapper>
        <NewEmployees employeesList={mockedEmployees} />
        <JobOffers jobList={mockedJobOffers} />
      </TemporaryFirstWrapper>
      <TemporarySecondWrapper>
        <InterestingEventWebpart interestingEvents={mockedInterestingEvents} />
        <SocialMediaWebpart socialMedias={mockedSocialMedias} />
      </TemporarySecondWrapper>
    </PageWrapper>
  );
};
