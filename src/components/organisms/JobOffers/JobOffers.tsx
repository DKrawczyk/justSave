import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { IJobMock, Direction, IPropsStyle } from "../../../utils/interfaces";
import { ArticleHeader } from "../../atoms";
import { Pagination } from "../NewEmployees/Pagination";

const WebpartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: #f1f1f1; */
  padding: 40px 16px;
  /* margin: 0 auto; */
  flex-direction: column;
  @media (max-width: 785px) {
    width: 100%;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }
`;

const EmployeesListWrapper = styled.div`
  height: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const SingleEmployee = styled.div`
  height: 150px;
  display: flex;
  padding: 4px 0;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 3px solid lightgray;
`;

const JobPositionDesc = styled.h4`
  font-weight: bold;
  font-size: 1.4rem;
  color: #3ab8b7;
  font-family: SnTl, sans-serif;
  white-space: nowrap;
`;

const DescriptionText = styled.p<IPropsStyle>`
  color: #31528f;
  font-family: ${(props) => props.fontFamily};
`;

const CustomPaginationFooter = styled.footer`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmployeeDetails = styled.div`
  width: 68%;
  padding: 8px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ShowAllLink = styled.a`
  font-size: 0.75rem;
  color: #31528f;
  font-weight: bold;
`;

const RecomendationBtn = styled.button`
  background-color: #3ab8b7;
  /* background: none; */
  border: none;
  color: white;
  padding: 5px;
  width: 110px;
`;

export const JobOffers: FC<IJobMock> = ({ jobList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const employeesOnPage: number = 3;
  const lastListPageIndex = currentPage * employeesOnPage;
  const firstListPageIndex = lastListPageIndex - employeesOnPage;
  const visibleEmployeesList = jobList?.slice(
    firstListPageIndex,
    lastListPageIndex
  );
  const pageNumber = [];

  if (jobList) {
    for (let i = 1; i < jobList.length / employeesOnPage; i++) {
      pageNumber.push(i);
    }
  }

  const switchPageHandler = useCallback(
    (direction: string) => {
      switch (direction) {
        case Direction.next:
          if (currentPage <= pageNumber.length) {
            setCurrentPage((next) => next + 1);
          }

          break;
        case Direction.previous:
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
          break;
        default:
          return null;
      }
    },
    [currentPage, pageNumber]
  );

  const jobs = visibleEmployeesList?.map((el, idx) => {
    return (
      <SingleEmployee key={idx}>
        <EmployeeDetails>
          <JobPositionDesc>{el.jobTitle}</JobPositionDesc>
          <DescriptionText fontFamily={"SnTb, sans-serif"}>
            {el.location}
          </DescriptionText>
          <DescriptionText>Bonus za polecenie: {el.recBonus}</DescriptionText>
          <RecomendationBtn>Generuj link</RecomendationBtn>
        </EmployeeDetails>
      </SingleEmployee>
    );
  });
  return (
    <WebpartWrapper>
      <ArticleHeader>Nowe oferty pracy</ArticleHeader>
      <EmployeesListWrapper>{jobs}</EmployeesListWrapper>
      <CustomPaginationFooter>
        <ShowAllLink href="/">Wszystkie oferty pracy</ShowAllLink>
        <Pagination
          pageNumber={pageNumber.length + 1}
          currentPage={currentPage}
          callback={switchPageHandler}
        />
      </CustomPaginationFooter>
    </WebpartWrapper>
  );
};
