import { FC, useCallback, useState } from "react";
import { IJobMock, Direction } from "../../../utils/interfaces";
import {
  ArticleHeader,
  FooterPaginationWrapper,
  Hyperlink,
  JobOffersWebpartWrapper,
} from "../../atoms";
import { SingleJobOffer } from "../../molecules";
import { Pagination } from "../NewEmployees/Pagination";

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

  return (
    <JobOffersWebpartWrapper>
      <ArticleHeader>Nowe oferty pracy</ArticleHeader>
      <SingleJobOffer jobList={visibleEmployeesList} />
      <FooterPaginationWrapper>
        <Hyperlink href="/">Wszystkie oferty pracy</Hyperlink>
        <Pagination
          pageNumber={pageNumber.length + 1}
          currentPage={currentPage}
          callback={switchPageHandler}
        />
      </FooterPaginationWrapper>
    </JobOffersWebpartWrapper>
  );
};
