import React, { FC } from "react";
import styled from "styled-components";
import {
  mockedEmployees,
  mockedInterestingEvents,
  mockedJobOffers,
  mockedSocialMedias,
  mockedNews,
} from "./assets/mocks";
import { Menu, NewsWebpart, SliderWebpart } from "./components/";
import {
  Footer,
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
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 30px 100px;
  }
`;

const TemporaryThirdWrapper = styled.div`
  display: flex;
  background-color: rgb(241, 241, 241);

  @media (min-width: 1280px) {
    justify-content: center;
    padding: 30px 100px;

  }
`;

export const App: FC = () => {
  return (
    <PageWrapper>
      <Menu />
      <NewsWebpart newsList={mockedNews} />
      <TemporaryFirstWrapper>
        <NewEmployees employeesList={mockedEmployees} />
        <JobOffers jobList={mockedJobOffers} />
      </TemporaryFirstWrapper>
      <TemporarySecondWrapper>
        <InterestingEventWebpart interestingEvents={mockedInterestingEvents} />
        <SocialMediaWebpart socialMedias={mockedSocialMedias} />
      </TemporarySecondWrapper>
      <TemporaryThirdWrapper>
        <SliderWebpart newsList={mockedNews} />
      </TemporaryThirdWrapper>
      {/* <div> */}
        <Footer />
      {/* </div> */}
    </PageWrapper>
  );
};
