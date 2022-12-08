import { FC, useCallback, useState } from "react";
// import axios,{ isCancel, AxiosError} from "axios";
import { IEmployeesList, Direction } from "../../../utils/interfaces";
import {
  ArticleHeader,
  FooterPaginationWrapper,
  Hyperlink,
  NewEmployeesWebpartWrapper,
} from "../../atoms";
import { SingleEmployee } from "../../molecules";
import { Pagination } from "./Pagination";

export const NewEmployees: FC<IEmployeesList> = ({ employeesList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const employeesOnPage: number = 4;
  const lastListPageIndex = currentPage * employeesOnPage;
  const firstListPageIndex = lastListPageIndex - employeesOnPage;
  const visibleEmployeesList = employeesList?.slice(
    firstListPageIndex,
    lastListPageIndex
  );
  const pageNumber = [];

  if (employeesList) {
    for (let i = 1; i < employeesList.length / employeesOnPage; i++) {
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
    <NewEmployeesWebpartWrapper>
      <ArticleHeader>Nowi pracownicy</ArticleHeader>
      <SingleEmployee employeeList={visibleEmployeesList} />

      <FooterPaginationWrapper>
        <Hyperlink href="/">Wszyscy pracownicy</Hyperlink>
        {/* molecules  */}
        <Pagination
          pageNumber={pageNumber.length + 1}
          currentPage={currentPage}
          callback={switchPageHandler}
        />
      </FooterPaginationWrapper>
    </NewEmployeesWebpartWrapper>
  );
};

