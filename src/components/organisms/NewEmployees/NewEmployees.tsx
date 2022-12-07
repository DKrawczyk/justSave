import { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// import axios,{ isCancel, AxiosError} from "axios";
// import { employeesList } from "../../../assets/mocks/employeesList";
import { IEmployeesList, Direction } from "../../../utils/interfaces";
import { ArticleHeader } from "../../atoms";
import { Pagination } from "./Pagination";

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
  padding: 16px 0;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
`;

const CustomPaginationFooter = styled.footer`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowAllLink = styled.a`
  font-size: 0.75rem;
  color: #31528f;
  font-weight: bold;
`;

const SingleEmployee = styled.div`
  display: flex;
  padding: 4px 0;
  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-around;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

const EmployeeImage = styled.img`
  width: 110px;
  height: 100%;
  @media (min-width: 1280px) {
    width: 100px;
  }

`;

const EmployeeDetails = styled.div`
  width: 68%;
  padding: 8px 0;
  @media (max-width: 785px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
`;

const EmployeeNameAndSurname = styled.h4`
  font-weight: bold;
  color: #31528f;
  font-family: SnTb, sans-serif;
`;

const DescriptionText = styled.p`
  color: #31528f;
  font-size: 0.85rem;
  white-space: nowrap;
`;

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

  const employees = visibleEmployeesList?.map((el, idx) => {
    return (
      <SingleEmployee key={idx}>
        {el.imgUrl ? <EmployeeImage src={el.imgUrl} /> : "alt"}
        <EmployeeDetails>
          <EmployeeNameAndSurname>{el.employee}</EmployeeNameAndSurname>
          <DescriptionText>{el.jobTitle}</DescriptionText>
          <DescriptionText>{el.position}</DescriptionText>
        </EmployeeDetails>
      </SingleEmployee>
    );
  });

  return (
    <WebpartWrapper>
      <ArticleHeader>Nowi pracownicy</ArticleHeader>
      <EmployeesListWrapper>{employees}</EmployeesListWrapper>
      <CustomPaginationFooter>
        <ShowAllLink href="/">Wszyscy pracownicy</ShowAllLink>

        <Pagination
          pageNumber={pageNumber.length + 1}
          currentPage={currentPage}
          callback={switchPageHandler}
        />
      </CustomPaginationFooter>
    </WebpartWrapper>
  );
};

// const getData = async () => {
//     await axios.get(`https://mysnt.sharepoint.com/sites/IntranetPL/_api/lists/getbytitle('WhoIsWho')/Items`, {
//
//         headers: {
//             // Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL3dlc3RldXJvcGUyLXNwaG9tZXAuc3ZjLm1zIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGM5ZDNjOTctM2ZkOS00MWM4LWEyYjEtNjQ2ZjM5NDJkYWYxLyIsImlhdCI6MTY3MDI0NjA1NiwibmJmIjoxNjcwMjQ2MDU2LCJleHAiOjE2NzAyNTAxMjUsImFjciI6IjEiLCJhaW8iOiJBVVFBdS84VEFBQUFYRWdvaFFobXZEWTUvdnJpTGQvdW9sL0VEekcyV0VIT0RaWk1XQXVzWEZqaXNWaytYZWo1REJURkQxdUMyNEVqUHF0QmFDeVNEN2huanFGQzJuSkJBQT09IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJPZmZpY2UgMzY1IFNoYXJlUG9pbnQgT25saW5lIiwiYXBwaWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJhcHBpZGFjciI6IjIiLCJhdXRoX3RpbWUiOjE2NzAyMzM4NDQsImZhbWlseV9uYW1lIjoiS3Jhd2N6eWsiLCJnaXZlbl9uYW1lIjoiRGF3aWQiLCJpcGFkZHIiOiIxODUuMTc5LjU4LjgzIiwibmFtZSI6IkRhd2lkIEtyYXdjenlrIiwib2lkIjoiMTdiNjY3MTEtNDNkYS00ZDVhLWI3YTUtMjg5YzRiMDU5MmFiIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3MDE4OTk3NjktMzY0MTkxMTYzMC0yNDU5MDQwMTYzLTEyNTU0NyIsInB1aWQiOiIxMDAzMjAwMjMyOTRFRTMzIiwicHdkX2V4cCI6IjEyMDI3ODgiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wb3J0YWwubWljcm9zb2Z0b25saW5lLmNvbS9DaGFuZ2VQYXNzd29yZC5hc3B4IiwicmgiOiIwLkFUQUFsenlkak5rX3lFR2lzV1J2T1VMYThWMkdyZHhYa2lGRnJVMjY0LUUzczBVd0FBSS4iLCJzY3AiOiJTUEhvbWUiLCJzdWIiOiJLdzlrVk9Cd1p4NDRGMTJIS1N2RUtNaW9yWkdTLUl1cDBwSjIycy1oeGpJIiwidGlkIjoiOGM5ZDNjOTctM2ZkOS00MWM4LWEyYjEtNjQ2ZjM5NDJkYWYxIiwidW5pcXVlX25hbWUiOiJkYXdpZC5rcmF3Y3p5a0BzbnQucGwiLCJ1cG4iOiJkYXdpZC5rcmF3Y3p5a0BzbnQucGwiLCJ1dGkiOiIxang3S3hJS19FZS05dHZLbjZONEFBIiwidmVyIjoiMS4wIn0.n-lO1Eue7Kzua5Pwe6C2-tD0BZAKZbvudYBCQtjTn7sCejd0SA_tI8b14sJOH9N5lrci2Wt0Fc6xo5QvACx7h9nNii-YnUVTYnEf7A9IhpT-vpBbbq4o8KfZylVtVzPCrIXb8to1BqrmuHnVoXoir95gVojY-vdGWGyT8zWXwA_n6ntKsh5YqaLLdSOqNDitdtlK9F4kxoo9fpzBUlfKQdOiB7ISNkerhsKgN61P8C2RwesHao7ZxaKrQAutB74lOVlS3PVESfDsEyXuju8azkGK67waJpY6LNlokMH-fypslluLt8w95MNEUar8qpq7C9jN2IFU5zrTfbpEjrgtew",
//             Accept: "application/json;odata=verbose"
//         }
//     })
//     .then(function(resp) {
//         console.log(resp)
//     })
//     .catch(function(rej) {
//         console.log(rej)
//     })
//     .finally(() => console.log('done'))
// }

// console.log(getData())
